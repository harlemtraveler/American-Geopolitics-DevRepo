import React, {Component} from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { Loading } from "element-react";
import { formatProductDate, formatDateToISO } from "../utils/index";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Article from "../components/article_components/Article";

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
    // isLoading: true,
    isBlogOwner: false,
    isEmailVerified: false
  };

  render() {
    const { blog, isLoading, isMarketOwner, isEmailVerified } = this.state;
    const { user, blogId } = this.props;

    return (
      <>
        {/* Back Button */}
        <Link className={"link"} to={"/"}>
          Back to Blogs List
        </Link>

        {/* Blog MetaData */}
        <span className={"items-center pt-2"}>
          <h2 className={"mb-mr"}>Blog Name</h2>- Blog Owner
        </span>
        <div className={"items-center pt-2"}>
          <span style={{ color: "#344955", paddingBottom: "1em" }}>
            <CalendarTodayIcon />
            {/*{blog.createdAt}*/}
            Blog Created At
          </span>
        </div>
      </>
    );
  }
}

export default BlogPage;