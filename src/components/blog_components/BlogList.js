import React from 'react';
import { Link } from "react-router-dom";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Loading, Icon, Tag } from "element-react";
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
        tags
        articles {
          items {
            id
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

const BlogList = () => {
  return (
    <Connect query={graphqlOperation(listBlogs)}>
      {/* The below values are interpolated from the above "Connect" API query */}
      {/* "errors" - is returned as an array */}
      {({ data, loading, errors }) => {
        if (errors.length > 0) return <Error errors={errors} />;
        if (loading || !data.listBlogs) return <Loading fullscreen={true} />

        return (
          <>
            <h2 className={"header"}>
              <LibraryBooksIcon />
              Blogs
            </h2>
            {data.listBlogs.items.map(blog => (
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
                      <Link className={"link"} to={`/blog/${blog.id}`}>
                        {blog.name}
                      </Link>
                      <span style={{ color: "#6b38fb" }}>
                        {blog.articles.items.length}
                      </span>
                      <DescriptionIcon style={{ color: "#6b38fb" }} />
                    </span>
                    {/*<div style={{ color: "#344955" }}>*/}
                    {/*  {blog.owner}*/}
                    {/*</div>*/}
                  </div>
                  <div>
                    {blog.tags && blog.tags.map(tag => (
                      <Chip icon={LocalOfferIcon} label={tag} />
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
