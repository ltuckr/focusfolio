import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      password
      bio
      created_at
      updated_at
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query projects {
    projects {
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

export const QUERY_PURCHASES = gql`
  query purchases {
    purchases {
      _id
      user_id
      project_id
      transactionAmount
      transactionDate
    }
  }
`;

export const QUERY_FAVORITES = gql`
  query favorites {
    favorites {
      _id
      user_id
      image_id
      created_at
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
