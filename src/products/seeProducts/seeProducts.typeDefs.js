import { gql } from "apollo-server";

export default gql`
  type Query {
    seeProducts(
      adName: String
      isActive: String
      packageName: String
    ): [Product]
  }
`;
