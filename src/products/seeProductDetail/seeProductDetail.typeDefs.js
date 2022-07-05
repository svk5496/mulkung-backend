import { gql } from "apollo-server";

export default gql`
  type Query {
    seeProductDetail(id: Int!): Product
  }
`;
