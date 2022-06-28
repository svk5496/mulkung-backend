import client from "../../client";

export default {
  Mutation: {
    deleteOrder: async (_, { id }) => {
      const order = await client.order.findUnique({
        where: {
          id,
        },
      });
      if (!order) {
        return {
          ok: false,
          error: "Order not found.",
        };
      } else {
        await client.order.delete({
          where: {
            id,
          },
        });
        return {
          ok: true,
        };
      }
    },
  },
};
