import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeOrderDetail: (_, { id }) =>
      client.order.findUnique({
        where: {
          id,
        },
      }),
  },
};
