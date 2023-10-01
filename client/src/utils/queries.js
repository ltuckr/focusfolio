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

export const QUERY_USER = gql`
query User {
  user {
    favorites {
      _id
      imageUrl
    }
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


export const QUERY_IMAGES = gql`
query Images {
  images {
    _id
    imageUrl
  }
}
`;
