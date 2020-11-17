/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const registerUser = /* GraphQL */ `
  mutation RegisterUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    registerUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createPostLike = /* GraphQL */ `
  mutation CreatePostLike(
    $input: CreatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    createPostLike(input: $input, condition: $condition) {
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
export const updatePostLike = /* GraphQL */ `
  mutation UpdatePostLike(
    $input: UpdatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    updatePostLike(input: $input, condition: $condition) {
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
export const deletePostLike = /* GraphQL */ `
  mutation DeletePostLike(
    $input: DeletePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    deletePostLike(input: $input, condition: $condition) {
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
export const createCommentLike = /* GraphQL */ `
  mutation CreateCommentLike(
    $input: CreateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    createCommentLike(input: $input, condition: $condition) {
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
export const updateCommentLike = /* GraphQL */ `
  mutation UpdateCommentLike(
    $input: UpdateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    updateCommentLike(input: $input, condition: $condition) {
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
export const deleteCommentLike = /* GraphQL */ `
  mutation DeleteCommentLike(
    $input: DeleteCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    deleteCommentLike(input: $input, condition: $condition) {
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
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
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
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
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
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
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
export const createMarket = /* GraphQL */ `
  mutation CreateMarket(
    $input: CreateMarketInput!
    $condition: ModelMarketConditionInput
  ) {
    createMarket(input: $input, condition: $condition) {
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
export const updateMarket = /* GraphQL */ `
  mutation UpdateMarket(
    $input: UpdateMarketInput!
    $condition: ModelMarketConditionInput
  ) {
    updateMarket(input: $input, condition: $condition) {
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
export const deleteMarket = /* GraphQL */ `
  mutation DeleteMarket(
    $input: DeleteMarketInput!
    $condition: ModelMarketConditionInput
  ) {
    deleteMarket(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      product {
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
      shippingAddress {
        city
        country
        address_line1
        address_state
        address_zip
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createArticleComment = /* GraphQL */ `
  mutation CreateArticleComment(
    $input: CreateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    createArticleComment(input: $input, condition: $condition) {
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
export const updateArticleComment = /* GraphQL */ `
  mutation UpdateArticleComment(
    $input: UpdateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    updateArticleComment(input: $input, condition: $condition) {
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
export const deleteArticleComment = /* GraphQL */ `
  mutation DeleteArticleComment(
    $input: DeleteArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    deleteArticleComment(input: $input, condition: $condition) {
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
