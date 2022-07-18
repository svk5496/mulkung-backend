import { gql } from "apollo-server";

export default gql`
  type Query {
    searchUser(
      firstName: String!
      phone: String
      adName: String
      packageName: String
      startDate: String
      endDate: String
    ): [User]
  }
`;
