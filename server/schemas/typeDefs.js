const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    purchases: [Purchase]!
    favorites: [Favorite]!
    comments: [Comment]!
  }

  type Project {
    _id: ID!
    title: String!
    description: String!
    images: [String]!
    user: User!
    galleryType: String  # Add this field (e.g., "general" or "client")
    tags: [String]  # Add tags or categories if needed
  }

  type Purchase {
    _id: ID!
    project: Project!
    user: User!
  }

  type Favorite {
    _id: ID!
    project: Project!
    user: User!
  }

  type Comment {
    _id: ID!
    text: String!
    project: Project!
    user: User!
  }

  type Query {
    projects: [Project]!
    project(_id: ID!): Project
    users: [User]!
    user(_id: ID!): User
    purchases: [Purchase]!
    favorites: [Favorite]!
    comments: [Comment]!
    clientGalleryImages: [Project]!  # Add this query
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createProject(title: String!, description: String!, images: [String]!): Project
    createPurchase(projectId: ID!): Purchase
    createFavorite(projectId: ID!): Favorite  # Add this mutation
    createComment(projectId: ID!, text: String!): Comment
  }
`;

module.exports = typeDefs;
