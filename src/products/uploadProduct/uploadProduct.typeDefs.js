import { gql } from "apollo-server";

export default gql`
  type uploadProductResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    uploadProduct(
      productName: String!
      price: Int!
      detailPage1: String!
      detailPage2: String!
      color: String
      size: String
      productSliderPicture: String
    ): uploadProductResult!
  }
`;
