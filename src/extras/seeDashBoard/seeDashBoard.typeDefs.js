import { gql } from "apollo-server";

export default gql`
  type SeeDashBoardResult {
    ok: Boolean!
    error: String
    countUsers: Int!
    countOrders: Int!
    countRefunds: Int!
    landing1TotalPurchase: Int!
    landing2TotalPurchase: Int!
    chart1Object: [Chart1Object]
    chart2Object: [Chart2Object]
  }
  type Query {
    seeDashBoard: SeeDashBoardResult!
  }
  type Chart1Object {
    name: String
    data: [String]
  }
  type Chart2Object {
    name: String
    data: [Int]
  }
`;
