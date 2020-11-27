import React from 'react';
import { Link } from "react-router-dom";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import Card from '@material-ui/core/Card';
import CheckIcon from '@material-ui/icons/Check';
import Chip from '@material-ui/core/Chip';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Loading } from "element-react";
import Error from "../Error";

const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        tags
        articles {
          items {
            id
            owner
            title
            url
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

const BlogList = ({ searchResults }) => {
  return (
    <Connect query={graphqlOperation(listBlogs)}>
      {/* The below values are interpolated from the above "Connect" API query */}
      {/* "errors" - is returned as an array */}
      {({ data, loading, errors }) => {
        if (errors.length > 0) return <Error errors={errors} />;
        if (loading || !data.listBlogs) return <Loading fullscreen={true} />;
        const blogs = searchResults.length > 0 ? searchResults : data.listBlogs.items;

        return (
          <>
            {searchResults.length > 0 ? (
              <h2 className={"text-green"}>
                <CheckIcon />
                {searchResults.length} Results
              </h2>
            ) : (
              <h2 className={"header"}>
                <LibraryBooksIcon/>
                Blogs
              </h2>
            )}
            {blogs.map(blog => (
              <div key={blog.id} className={"my-2"}>
                <Card
                  style={{
                    padding: "0.7em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <span className={"flex"}>
                      <Link className={"link"} to={`/blogs/${blog.id}`}>
                        {blog.name}
                      </Link>
                      <span style={{ color: "#6b38fb" }}>
                        {blog.articles.items.length}
                      </span>
                      <DescriptionIcon style={{ color: "#6b38fb" }} />
                    </span>
                    <div style={{ color: "#344955" }}>
                      {blog.owner}
                    </div>
                  </div>
                  <div>
                    {blog.tags && blog.tags.map(tag => (
                      <Chip icon={LocalOfferIcon} label={tag} style={{ margin: "2px" }} />
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </>
        );
      }}
    </Connect>
  );
};

export default BlogList;
