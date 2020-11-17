/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike {
    onCreatePostLike {
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
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike {
    onUpdatePostLike {
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
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike {
    onDeletePostLike {
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
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike {
    onCreateCommentLike {
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
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike {
    onUpdateCommentLike {
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
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike {
    onDeleteCommentLike {
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
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing {
    onCreateFollowing {
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
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing {
    onUpdateFollowing {
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
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing {
    onDeleteFollowing {
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
export const onCreateMarket = /* GraphQL */ `
  subscription OnCreateMarket {
    onCreateMarket {
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
export const onUpdateMarket = /* GraphQL */ `
  subscription OnUpdateMarket {
    onUpdateMarket {
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
export const onDeleteMarket = /* GraphQL */ `
  subscription OnDeleteMarket {
    onDeleteMarket {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      articles {
        items {
          id
          title
          blogID
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      articles {
        items {
          id
          title
          blogID
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      articles {
        items {
          id
          title
          blogID
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
      id
      title
      blogID
      blog {
        id
        name
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
      id
      title
      blogID
      blog {
        id
        name
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
      id
      title
      blogID
      blog {
        id
        name
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
export const onCreateArticleComment = /* GraphQL */ `
  subscription OnCreateArticleComment {
    onCreateArticleComment {
      id
      articleID
      article {
        id
        title
        blogID
        blog {
          id
          name
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
export const onUpdateArticleComment = /* GraphQL */ `
  subscription OnUpdateArticleComment {
    onUpdateArticleComment {
      id
      articleID
      article {
        id
        title
        blogID
        blog {
          id
          name
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
export const onDeleteArticleComment = /* GraphQL */ `
  subscription OnDeleteArticleComment {
    onDeleteArticleComment {
      id
      articleID
      article {
        id
        title
        blogID
        blog {
          id
          name
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
