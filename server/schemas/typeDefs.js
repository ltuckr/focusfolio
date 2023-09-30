const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    purchases: [Product]!
    favorites: [Image]!
    comments: [Comment]!
  }

  type Auth {
    token: ID
    user: User
  }

  type Project {
    _id: ID!
    title: String!
    description: String!
    images: [Image]!
    user: User!
    galleryType: String  # Add this field (e.g., "general" or "client")
    tags: [String]  # Add tags or categories if needed
  }

  type Image {
    _id: ID!
    imageUrl: String!
    user: User!
    favorites: [Favorite!]!
  }

  type Favorite {
    _id: ID!
    user: User!
    image: Image!
  }

  type Product {
    _id: ID! 
    name: String!
    description: String!
    price: Float!
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
    purchases: [Product]!
    comments: [Comment]!
    clientGalleryImages: [Project]!  # Add this query
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    createProject(title: String!, description: String!, images: [String]!): Project
    createPurchase(projectId: ID!): Product  # Updated this line to return a Product
    createFavorite(imageId: ID!): Favorite
    createComment(projectId: ID!, text: String!): Comment
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
