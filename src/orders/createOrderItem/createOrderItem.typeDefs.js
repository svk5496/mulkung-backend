import { gql } from "apollo-server";

export default gql`
  type CreateOrderItemResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createOrderItem(
      orderId: Int
      productId: Int
      firstName: String
      phone: String
      status: String
      amount: String
      size: String
      color: String
    ): CreateOrderItemResult
  }
`;
