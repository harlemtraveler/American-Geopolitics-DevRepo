import React from 'react';

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
        articles {
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
    <>
      {/*  */}
    </>
  );
};

export default BlogList;
