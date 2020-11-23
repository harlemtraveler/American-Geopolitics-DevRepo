import React, {Component} from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { Loading } from "element-react";
import SwipeableViews from 'react-swipeable-views';
import { formatProductDate, formatDateToISO } from "../utils/index";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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

  getFormatProductDate = date => {
    const formatDate = formatDateToISO(date);
    return formatProductDate(formatDate);
  };

  render() {
    const { blog, selectedTab, isLoading, isMarketOwner, isEmailVerified } = this.state;
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
            {this.getFormatProductDate(blog.createdAt)}
          </span>
        </div>

        {/* New Product (tab 1) | Products (tab 2) */}
        <Tabs value={selectedTab} onChange={this.handleTabChange}>
          <Tab
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

          {/* Products List */}
          <Tab
            label={
              <span>
                <ListIcon />
                Articles
              </span>
            }
          >
            <div className={"product-list"}>
              {/*<Article />*/}

            </div>
          </Tab>
        </Tabs>
        {selectedTab === 0 && <NewArticle blogId={blogId} />}

        {selectedTab === 1 && <Article />}
      </>
    );
  }
}

export default BlogPage;