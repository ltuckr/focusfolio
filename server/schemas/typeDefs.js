const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    favorites: [Image]!
    
  }

  type Auth {
    token: ID
    user: User
  }


  type Image {
    _id: ID!
    image: String!

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

    createPurchase(projectId: ID!): Product  # Updated this line to return a Product

    addFavorite(imageId: ID!): Image

    removeFavorite(userId: ID!, imageId: ID!): User

    createComment(projectId: ID!, text: String!): Comment

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
