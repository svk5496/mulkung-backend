import { gql } from "apollo-server";

export default gql`
  type activeProductResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    activeProduct(id: Int!, isActive: String!): activeProductResult!
  }
`;
