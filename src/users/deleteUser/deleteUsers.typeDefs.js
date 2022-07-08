import { gql } from "apollo-server-express";

export default gql`
  type deleteUserResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteUser(id: Int!): deleteUserResult!
  }
`;
