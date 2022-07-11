import { gql } from "apollo-server-express";

export default gql`
  type CreateOrderResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createOrder(
      firstName: String!
      age: String
      phone: String!
      status: String!
      orderMethod: String!
      addressName: String!
      shippingName: String!
      shippingPhone: String!
      shippingAddress: String!
      shippingDetailAddress: String!
      shippingZipCode: String!
      creditCard: String
      expireDate: String
      cvcNumber: String
    ): CreateOrderResult!
  }
`;
