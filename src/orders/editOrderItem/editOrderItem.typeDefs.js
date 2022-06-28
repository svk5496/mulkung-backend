import { gql } from "apollo-server";

export default gql`
  type EditOrderItemResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editOrderItem(
      orderItemId: Int!
      trackingNumber: String
      orderItemStatus: String
      memo: String
    ): EditOrderItemResult
  }
`;
