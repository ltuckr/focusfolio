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


//updated with Andrew B. NO TOUCHIE! 
export const CREATE_FAVORITE = gql`
  mutation CreateFavorite($userId: ID!, $imageId: ID!) {
    createFavorite(userId: $userId, imageId: $imageId) {
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
