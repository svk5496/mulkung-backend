import { gql } from "apollo-server-express";

export default gql`
  type deleteProductResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteProduct(id: Int!): deleteProductResult!
  }
`;
