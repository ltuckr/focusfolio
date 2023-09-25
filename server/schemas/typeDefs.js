const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bio: String
    created_at: String!
    updated_at: String!
  }

  type Project {
    _id: ID!
    title: String!
    description: String!
    images: [Image]!
    user_id: ID!
    created_at: String!
    updated_at: String!
  }

  type Purchase {
    _id: ID!
    user_id: ID!
    project_id: ID!
    transactionAmount: Float!
    transactionDate: String!
  }

  type Favorite {
    _id: ID!
    user_id: ID!
    image_id: ID!
    created_at: String!
  }

  type Comment {
    _id: ID!
    user_id: ID!
    image_id: ID!
    text: String!
    created_at: String!
  }

  type Image {
    _id: ID!
    imageUrl: String!
    description: String!
  }

  type Query {
    users: [User]
    projects: [Project]
    purchases: [Purchase]
    favorites: [Favorite]
    comments: [Comment]
    images: [Image]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createProject(title: String!, description: String!, images: [ImageInput]!): Project
    createPurchase(user_id: ID!, project_id: ID!, transactionAmount: Float!): Purchase
    createFavorite(user_id: ID!, image_id: ID!): Favorite
    createComment(user_id: ID!, image_id: ID!, text: String!): Comment
  }

  input ImageInput {
    imageUrl: String!
    description: String!
  }
`;

module.exports = typeDefs;
