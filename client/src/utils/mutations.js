import { gql } from '@apollo/client';

mutation CreateFavorite($userId: ID!, $imageUrl: String!) {
  createFavorite(userId: $userId, imageUrl: $imageUrl) {
    _id
  }
}

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      created_at
      updated_at
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation createProject($title: String!, $description: String!, $images: [ImageInput]!) {
    createProject(title: $title, description: $description, images: $images) {
      _id
      title
      description
      images {
        _id
        imageUrl
        description
      }
      user_id
      created_at
      updated_at
    }
  }
`;

export const CREATE_PURCHASE = gql`
  mutation createPurchase($user_id: ID!, $project_id: ID!, $transactionAmount: Float!) {
    createPurchase(user_id: $user_id, project_id: $project_id, transactionAmount: $transactionAmount) {
      _id
      user_id
      project_id
      transactionAmount
      transactionDate
    }
  }
`;

export const CREATE_FAVORITE = gql`
mutation CreateFavorite($userId: ID!, $imageUrl: String!) {
  createFavorite(userId: $userId, imageUrl: $imageUrl) {
    _id
  }
}
`; //updated with Andrew B. NO TOUCHIE! 

export const CREATE_COMMENT = gql`
  mutation createComment($user_id: ID!, $image_id: ID!, $text: String!) {
    createComment(user_id: $user_id, image_id: $image_id, text: $text) {
      _id
      user_id
      image_id
      text
      created_at
    }
  }
`;

export const CREATE_IMAGE = gql`
  mutation createImage($imageUrl: String!, $description: String!) {
    createImage(imageUrl: $imageUrl, description: $description) {
      _id
      imageUrl
      description
    }
  }
`;

export const ImageInput = gql`
  input ImageInput {
    imageUrl: String!
    description: String!
  }
`;
