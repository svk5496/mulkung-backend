import { gql } from "apollo-server";

export default gql`
  type CreateAccountResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createAccount(
      firstName: String!
      username: String
      email: String
      lastName: String
      password: String
      phone: String!
      size: String!
      orderMethod: String!
      isSuperUser: Boolean
    ): CreateAccountResult
  }
`;
