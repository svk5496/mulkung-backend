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
      adName: String!
      packageName: String!
      detailPage1: String!
      productSliderPicture: String
    ): uploadProductResult!
  }
`;
