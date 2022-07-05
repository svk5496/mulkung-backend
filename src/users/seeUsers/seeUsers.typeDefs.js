import { gql } from "apollo-server";

export default gql`
  type SeeUsersResult {
    ok: Boolean!
    error: String
    Users: [User]
    totalPages: Int
  }
  type Query {
    seeUsers(firstName: String, page: Int!): SeeUsersResult!
  }
`;
