import { gql } from "apollo-server";

export default gql`
  type Query {
    searchUser(firstName: String!, phone: String): [User]
  }
`;
