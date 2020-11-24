import React, {Component} from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { Loading } from "element-react";
import SwipeableViews from 'react-swipeable-views';
import { formatProductDate, formatDateToISO } from "../utils/index";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import TabList from '@material-ui/lab/TabList';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Article from "../components/article_components/Article";
import NewArticle from "../components/article_components/NewArticle";

const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      owner
      tags
      articles {
        items {
          id
          blogID
          title
          sub_title
          preview
          body
          url
          tags
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

class BlogPage extends Component {
  state = {
    blog: null,
    selectedTab: 0,
    isLoading: true,
    isBlogOwner: false,
    isEmailVerified: false
  };

  componentDidMount() {
    this.handleGetBlog();
  }

  handleGetBlog = async () => {
    const input = {
      id: this.props.blogId
    };
    const result = await API.graphql(graphqlOperation(getBlog, input));
    this.setState({ blog: result.data.getBlog, isLoading: false }, () => {
      this.checkBlogOwner();
      this.checkEmailVerified();
    });
  };

  handleTabChange = (event, newValue) => {
    this.setState({ selectedTab: newValue });
  };

  checkBlogOwner = () => {
    const { user } = this.props;
    const { blog } = this.state;
    if (user) {
      this.setState({ isBlogOwner: user.sub === blog.owner });
    }
  };

  checkEmailVerified = () => {
    const { user } = this.props;
    if (user) {
      this.setState({ isEmailVerified: user.email_verified });
    }
  };

  getFormatBlogDate = date => {
    const formatDate = formatDateToISO(date);
    return formatProductDate(formatDate);
  };

  render() {
    const { blog, selectedTab, isLoading, isBlogOwner, isEmailVerified } = this.state;
    const { user, blogId } = this.props;

    return isLoading ? (
      <Loading fullscreen={true} />
    ) : (
      <>
        {/* Back Button */}
        <Link className={"link"} to={"/"}>
          <ArrowBackIosIcon />Back to Blog List
        </Link>

        {/* Blog MetaData */}
        <span className={"items-center pt-2"}>
          <h2 className={"mb-mr"}>{blog.name}</h2>- {blog.owner}
        </span>
        <div className={"items-center pt-2"}>
          <span style={{ color: "#344955", paddingBottom: "1em" }}>
            <CalendarTodayIcon />
            {this.getFormatBlogDate(blog.createdAt)}
          </span>
        </div>

        {/* New Article (tab 1) | Articles (tab 2) */}
        <TabContext value={selectedTab}>
          <TabList onChange={this.handleTabChange} selectionFollowsFocus>
            <Tab
              disabled={isBlogOwner ? false : true}
              label={
                <span>
                  <AddIcon />
                  Add New Article
                </span>
              }
            >
              {isEmailVerified ? (
                <NewArticle />
              ) : (
                <Link to={"/profile"} className={"header"}>
                  Verify Your Email Before Adding New Articles
                </Link>
              )}
              <NewArticle />

            </Tab>

            {/* Article List */}
            <Tab
              label={
                <span>
                  <ListIcon />
                  Articles ({ blog.articles.items.length })
                </span>
              }
            >
              <div className={"product-list"}>
                {/*<Article />*/}
                {/*{blog.articles.items.map(article => (*/}
                {/*  <Article key={article.id} article={article} />*/}
                {/*))}*/}
              </div>
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <NewArticle blogId={blogId} />
          </TabPanel>
          <TabPanel value={1}>
            <Grid container spacing={3} justify={"center"}>
              {blog.articles.items.map(article => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Article key={article.id} article={article}/>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </TabContext>


        {/*{selectedTab === 0 && <NewArticle blogId={blogId} />}*/}

        {/*{selectedTab === 1 && (blog.articles.items.map(article => (*/}
        {/*  <Article key={article.id} article={article} />*/}
        {/*)))}*/}
      </>
    );
  }
}

export default BlogPage;