import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation addFavorite($imageId: ID!) {
    addFavorite(imageId: $imageId) {
      _id
      imageUrl
    }
  }
`;

export const REMOVE_FAVORITE = gql`
mutation removeFavorite($imageId: ID!) {
  removeFavorite(imageId: $imageId) {
    _id
    imageUrl
  }
}
  
`;

