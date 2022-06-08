import client from "../../client";

export default {
  Query: {
    seeDetail: (_, { id }) =>
      client.product.findUnique({
        where: {
          id,
        },
      }),
  },
};
