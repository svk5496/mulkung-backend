import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeUser: async (_, { id }) =>
      client.user.findUnique({
        where: {
          id,
        },
      }),
  },
};
