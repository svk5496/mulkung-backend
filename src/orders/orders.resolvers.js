import client from "../client";

export default {
  Order: {
    user: ({ userId }) =>
      client.user.findUnique({
        where: {
          id: userId,
        },
      }),
    orderItems: ({ id }) =>
      client.orderItem.findMany({
        where: {
          orderId: id,
        },
      }),
  },
};
