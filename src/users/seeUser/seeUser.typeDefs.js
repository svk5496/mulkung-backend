import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUser(id: Int!): User
  }
`;
