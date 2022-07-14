import { gql } from "apollo-server";

export default gql`
  type editProductResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProduct(
      id: Int!
      productName: String!
      isActive: String
      price: Int!
      adName: String!
      packageName: String!
      detailPage1: String!
      productSliderPicture: String
    ): editProductResult!
  }
`;
