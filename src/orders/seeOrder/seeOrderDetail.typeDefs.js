import { gql } from "apollo-server";

export default gql`
  type Query {
    seeOrderDetail(id: Int!): Order
  }
`;
