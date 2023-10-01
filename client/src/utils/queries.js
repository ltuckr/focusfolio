import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      password
     
    }
  }
`;

export const QUERY_FAVORITES = gql`
  query favorites {
    favorites {
      _id
      user_id
      image_id
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comments {
    comments {
      _id
      user_id
      image_id
      text
      created_at
    }
  }
`;

export const QUERY_IMAGES = gql`
  query images {
    images {
      _id
      imageUrl
      description
    }
  }
`;
