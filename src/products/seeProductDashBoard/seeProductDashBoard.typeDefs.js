import { gql } from "apollo-server";

export default gql`
  type SeeProductDashBoardResult {
    ok: Boolean!
    error: String
    countOrders: Int!
    countOrderItems: Int!
    TotalPurchase7Days: Int!
    chart1Object: [Chart1Object]
  }
  type Query {
    seeProductDashBoard(id: Int!): SeeProductDashBoardResult!
  }
  type Chart1Object {
    name: String
    data: [String]
  }
`;
