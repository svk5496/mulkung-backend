import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeProductDetail: (_, { id }) =>
      client.product.findUnique({
        where: {
          id,
        },
      }),
  },
};
