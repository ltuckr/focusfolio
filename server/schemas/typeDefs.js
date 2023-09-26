const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    purchases: [Purchase]!
    favorites: [Favorite]!
    comments: [Comment]!  # Include the comments field here
  }

  type Project {
    _id: ID!
    title: String!
    description: String!
    images: [String]!
    user: User!
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
    comments: [Comment]!  # Include the comments query here
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createProject(title: String!, description: String!, images: [String]!): Project  # Include the createProject mutation here
    createPurchase(projectId: ID!): Purchase
    createFavorite(projectId: ID!): Favorite
    createComment(projectId: ID!, text: String!): Comment
  }
  
  
`;

module.exports = typeDefs;
