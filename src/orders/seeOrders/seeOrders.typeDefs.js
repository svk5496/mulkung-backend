import { gql } from "apollo-server";

export default gql`
  type Query {
    seeOrders(
      firstName: String
      phone: String
      startDate: String
      endDate: String
      status: String
    ): [Order]
  }
`;
