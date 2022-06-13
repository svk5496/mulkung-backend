import { gql } from "apollo-server";

export default gql`
  type editProductResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProduct(
      productName: String!
      price: Int!
      detailPage1: String!
      detailPage2: String!
      color: String
      size: String
      productSliderPicture: String
    ): editProductResult!
  }
`;
