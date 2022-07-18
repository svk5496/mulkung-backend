import { gql } from "apollo-server";

export default gql`
  type SeeUsersResult {
    ok: Boolean!
    error: String
    Users: [User]
    totalUsers: Int
    totalPages: Int
  }
  type Query {
    seeUsers(
      firstName: String
      page: Int!
      packageName: String
      gender: String
      startDate: String
      endDate: String
    ): SeeUsersResult!
  }
`;
