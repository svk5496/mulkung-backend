import client from "../../client";
import bcrypt from "bcrypt";
import { now } from "moment";

export default {
  Mutation: {
    createOrderItem: async (
      _,
      { firstName, phone, orderId, productId, amount, size, color }
    ) => {
      try {
        console.log(orderId);
        //order ID가 있는 경우,
        if (orderId) {
          const existingOrderItem = await client.orderItem.findFirst({
            where: {
              orderId,
            },
          });

          //아이템이 이미 존재한다면,
          if (existingOrderItem) {
            await client.orderItem.deleteMany({
              where: {
                orderId,
                trackingNumber: null,
              },
            });
            const reNewOrderItem = await client.orderItem.create({
              data: {
                amount,
                size,
                color,
                product: {
                  connect: {
                    id: productId,
                  },
                },
                order: {
                  connect: {
                    id: orderId,
                  },
                },
              },
            });
            if (reNewOrderItem) {
              return {
                ok: true,
              };
            }
            return {
              ok: false,
              error: "creat order item is failed",
            };
          } else {
            const newOrderItem = await client.orderItem.create({
              data: {
                amount,
                size,
                color,
                product: {
                  connect: {
                    id: productId,
                  },
                },
                order: {
                  connect: {
                    id: orderId,
                  },
                },
              },
            });
            if (newOrderItem) {
              return {
                ok: true,
              };
            }
            return {
              ok: false,
              error: "creat order item is failed",
            };
          }
        } else {
          //Order ID가 존재하지 않는경우.
          const findOrder = await client.order.findFirst({
            where: {
              AND: [
                { o_name: firstName },
                { status: "paid" },
                { o_phone: phone },
              ],
            },
          });

          if (!findOrder) {
            return {
              ok: false,
              error: "order doesn't exist",
            };
          }

          const newOrderItem = await client.orderItem.create({
            data: {
              amount,
              size,
              color,
              product: {
                connect: {
                  id: productId,
                },
              },
              order: {
                connect: {
                  id: findOrder.id,
                },
              },
            },
          });
          console.log(newOrderItem);
          if (newOrderItem) {
            return {
              ok: true,
            };
          }
          return {
            ok: false,
            error: "creat order item is failed",
          };
        }
      } catch (e) {
        return e;
      }
    },
  },
};
