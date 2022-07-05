import { gql } from "apollo-server";

export default gql`
  type SeeDashBoardResult {
    ok: Boolean!
    error: String
    countUsers: Int!
    countOrders: Int!
    countRefunds: Int!
  }
  type Query {
    seeDashBoard: SeeDashBoardResult!
  }
`;
