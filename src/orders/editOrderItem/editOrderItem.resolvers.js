import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    editOrderItem: async (
      _,
      { orderItemId, trackingNumber, memo, orderItemStatus }
    ) => {
      try {
        const existOrderItem = await client.orderItem.findUnique({
          where: {
            id: orderItemId,
          },
        });

        console.log(existOrderItem);

        if (!existOrderItem) {
          return {
            ok: false,
            error: "can't find orderItem",
          };
        }

        const updateOrderItem = await client.orderItem.update({
          where: {
            id: existOrderItem.id,
          },
          data: {
            trackingNumber,
            memo,
            status: orderItemStatus,
          },
        });

        console.log(updateOrderItem);

        if (!updateOrderItem) {
          return {
            ok: false,
            error: "updated failed",
          };
        }

        return {
          ok: true,
        };
      } catch (e) {
        return e;
      }
    },
  },
};
