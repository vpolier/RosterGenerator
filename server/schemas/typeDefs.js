const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    fullname: String
    title: String
    email: String
    password: String
  }
    
  type Role {
    _id: ID
    roletype: String 
  }

  type Timeblock{
    _id: ID
    date: String
    shift: String
  }

  type Shift{
    _id: ID
    user: User
    timeblocks: [Timeblock] 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users(userRole: ID):[User]
    user(email: String!): User
    roles: [Role]
  }

  type Mutation {
    addUser(fullname: String!, title: String, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRole(roletype: String): Role 
  }
`;

module.exports = typeDefs;
