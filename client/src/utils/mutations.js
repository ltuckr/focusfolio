import { gql } from '@apollo/client';


export const CREATE_USER = gql`
mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
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
        email
        
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation AddFavorite($imageId: ID!) {
    addFavorite(imageId: $imageId) {
      _id
      imageUrl
      favorites {
        _id
        user {
          _id
        }
      }
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation RemoveFavorite($imageId: ID!) {
    removeFavorite(imageId: $imageId) {
      _id
      imageUrl
      favorites {
        _id
        user {
          _id
        }
      }
    }
  }
`;



