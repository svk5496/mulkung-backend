import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String
    username: String!
    email: String
    password: String
    phone: String!
    size: String!
    isSuperUser: Boolean!
    shippingAddresses: [ShippingAddress]
    order: [Order]
    createdAt: String!
    updatedAt: String!
  }

  type ShippingAddress {
    id: Int!
    user: User!
    addressName: String!
    shippingName: String!
    shippingPhone: String!
    shippingAddress: String!
    shippingDetailAddress: String!
    shippingZipCode: String!
    is_default: String!
    createdAt: String!
    updatedAt: String!
  }

  type Order {
    id: Int
    user: User
    orderByPhone: Boolean
    paid: Boolean
    orderItems: [OrderItem]
    createdAt: String!
    updatedAt: String!
  }

  type OrderItem {
    id: Int!
    order: Order
    product: Product!
    amount: Int
    createdAt: String!
    updatedAt: String!
  }
`;
