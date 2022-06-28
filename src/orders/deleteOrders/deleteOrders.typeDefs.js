import { gql } from "apollo-server-express";

export default gql`
  type deleteOrderResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteOrder(id: Int!): deleteOrderResult!
  }
`;
