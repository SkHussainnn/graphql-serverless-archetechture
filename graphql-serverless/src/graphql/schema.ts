import { gql } from 'apollo-server-lambda'; // Updated import

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    allUsers: [User]
  }
`;
