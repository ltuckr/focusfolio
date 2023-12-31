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
    imageUrl: String!
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
    
    user: User!
  }

  type Query {
    
    users: [User]!
    purchases: [Product]!
    comments: [Comment]!
    images: [Image]!
    user: User!
    
  }

  type Mutation {
    
    createUser(username: String!, email: String!, password: String!): Auth

    addFavorite(imageId: ID!):  Image

    removeFavorite( imageId: ID!): Image

    createComment(projectId: ID!, text: String!): Comment

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
