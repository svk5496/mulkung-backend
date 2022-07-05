import client from "../client";

export default {
  User: {
    order: ({ id }) =>
      client.order.findMany({
        where: {
          userId: id,
        },
      }),
    shippingAddresses: ({ id }) =>
      client.shippingAddress.findMany({
        where: {
          userId: id,
        },
      }),
    totalPurchase: async ({ id }) => {
      const countOrder = await client.order.count({
        where: {
          userId: id,
        },
      });
      return countOrder;
    },
  },
};
