import { gql } from "apollo-server-express";

export default gql`
  type EditPaidOrderResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editPaidOrder(
      id: Int!
      status: String!
      addressName: String!
      shippingName: String!
      shippingPhone: String!
      shippingAddress: String!
      shippingDetailAddress: String!
      shippingZipCode: String!
    ): EditPaidOrderResult!
  }
`;
