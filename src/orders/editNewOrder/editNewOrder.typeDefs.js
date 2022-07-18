import { gql } from "apollo-server-express";

export default gql`
  type EditNewOrderResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editNewOrder(
      id: Int!
      age: String
      gender: String!
      status: String!
      addressName: String!
      shippingName: String!
      shippingPhone: String!
      shippingAddress: String!
      shippingDetailAddress: String!
      shippingZipCode: String!
      creditCard: String
      expireDate: String
      cvcNumber: String
    ): EditNewOrderResult!
  }
`;
