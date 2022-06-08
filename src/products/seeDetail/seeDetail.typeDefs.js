import { gql } from "apollo-server";

export default gql`
  type Query {
    seeDetail(id: Int!): Product
  }
`;
