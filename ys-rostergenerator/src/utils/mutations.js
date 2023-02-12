import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation AddUser($firstname: String!, $lastname: String!, $title: String!, $email: String!, $password: String!) {
    addUser(firstname: $firstname, lastname: $lastname, title: $title, email: $email, password: $password) {
      token
      user {
        _id
        firstname
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
