/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      userId
      screenName
      avatar
      backgroundImageUrl
      bio
      location
      website
      birthdate
      email
      registered
      orders {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      following {
        items {
          id
          followerId
          followingId
          createdAt
          updatedAt
        }
        nextToken
      }
      followersCount
      followingCount
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      authorId
      content
      postImage
      author {
        userId
        screenName
        avatar
        backgroundImageUrl
        bio
        location
        website
        birthdate
        email
        registered
        orders {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        followersCount
        followingCount
      }
      comments {
        items {
          id
          postId
          authorId
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          postId
          userId
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        authorId
        content
        postImage
        author {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postId
      authorId
      text
      likes {
        items {
          id
          userId
          postId
          commentId
          createdAt
          updatedAt
        }
        nextToken
      }
      author {
        userId
        screenName
        avatar
        backgroundImageUrl
        bio
        location
        website
        birthdate
        email
        registered
        orders {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        followersCount
        followingCount
      }
      post {
        id
        authorId
        content
        postImage
        author {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postId
        authorId
        text
        likes {
          nextToken
        }
        author {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        post {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPostLike = /* GraphQL */ `
  query GetPostLike($id: ID!) {
    getPostLike(id: $id) {
      id
      postId
      userId
      user {
        userId
        screenName
        avatar
        backgroundImageUrl
        bio
        location
        website
        birthdate
        email
        registered
        orders {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        followersCount
        followingCount
      }
      post {
        id
        authorId
        content
        postImage
        author {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPostLikes = /* GraphQL */ `
  query ListPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postId
        userId
        user {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        post {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCommentLike = /* GraphQL */ `
  query GetCommentLike($id: ID!) {
    getCommentLike(id: $id) {
      id
      userId
      postId
      commentId
      user {
        userId
        screenName
        avatar
        backgroundImageUrl
        bio
        location
        website
        birthdate
        email
        registered
        orders {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        followersCount
        followingCount
      }
      post {
        id
        authorId
        content
        postImage
        author {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCommentLikes = /* GraphQL */ `
  query ListCommentLikes(
    $filter: ModelCommentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        postId
        commentId
        user {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        post {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      followerId
      followingId
      follower {
        userId
        screenName
        avatar
        backgroundImageUrl
        bio
        location
        website
        birthdate
        email
        registered
        orders {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        followersCount
        followingCount
      }
      following {
        userId
        screenName
        avatar
        backgroundImageUrl
        bio
        location
        website
        birthdate
        email
        registered
        orders {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        following {
          nextToken
        }
        followersCount
        followingCount
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followerId
        followingId
        follower {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        following {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMarket = /* GraphQL */ `
  query GetMarket($id: ID!) {
    getMarket(id: $id) {
      id
      name
      products {
        items {
          id
          description
          price
          shipped
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tags
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listMarkets = /* GraphQL */ `
  query ListMarkets(
    $filter: ModelMarketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarkets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        products {
          nextToken
        }
        tags
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      description
      market {
        id
        name
        products {
          nextToken
        }
        tags
        owner
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
      price
      shipped
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        market {
          id
          name
          tags
          owner
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
        price
        shipped
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
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
export const listBlogs = /* GraphQL */ `
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      blogID
      title
      sub_title
      preview
      body
      url
      file {
        bucket
        region
        key
      }
      tags
      blog {
        id
        name
        owner
        tags
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          articleID
          content
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
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blogID
        title
        sub_title
        preview
        body
        url
        file {
          bucket
          region
          key
        }
        tags
        blog {
          id
          name
          owner
          tags
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticleComment = /* GraphQL */ `
  query GetArticleComment($id: ID!) {
    getArticleComment(id: $id) {
      id
      articleID
      article {
        id
        blogID
        title
        sub_title
        preview
        body
        url
        file {
          bucket
          region
          key
        }
        tags
        blog {
          id
          name
          owner
          tags
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listArticleComments = /* GraphQL */ `
  query ListArticleComments(
    $filter: ModelArticleCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        articleID
        article {
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
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postLikesByUser = /* GraphQL */ `
  query PostLikesByUser(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postLikesByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        userId
        user {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        post {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentLikesByUser = /* GraphQL */ `
  query CommentLikesByUser(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentLikesByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        commentId
        user {
          userId
          screenName
          avatar
          backgroundImageUrl
          bio
          location
          website
          birthdate
          email
          registered
          createdAt
          updatedAt
          followersCount
          followingCount
        }
        post {
          id
          authorId
          content
          postImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchMarkets = /* GraphQL */ `
  query SearchMarkets(
    $filter: SearchableMarketFilterInput
    $sort: SearchableMarketSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchMarkets(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        products {
          nextToken
        }
        tags
        owner
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchBlogs = /* GraphQL */ `
  query SearchBlogs(
    $filter: SearchableBlogFilterInput
    $sort: SearchableBlogSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchBlogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        owner
        tags
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchArticles = /* GraphQL */ `
  query SearchArticles(
    $filter: SearchableArticleFilterInput
    $sort: SearchableArticleSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchArticles(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        blogID
        title
        sub_title
        preview
        body
        url
        file {
          bucket
          region
          key
        }
        tags
        blog {
          id
          name
          owner
          tags
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
