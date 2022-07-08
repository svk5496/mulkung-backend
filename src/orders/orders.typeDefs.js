import { gql } from "apollo-server";

export default gql`
  type Order {
    id: Int
    user: User
    product: Product
    orderMethod: String
    status: String
    o_name: String
    o_phone: String
    o_address: String
    o_detailAddress: String
    o_zipCode: String
    orderItems: [OrderItem]
    sent: Boolean
    createdAt: String!
    updatedAt: String!
  }

  type OrderItem {
    id: Int!
    order: Order
    product: Product!
    amount: Int
    color: String
    size: String
    status: String!
    memo: String
    trackingNumber: String
    createdAt: String!
    updatedAt: String!
  }
`;
