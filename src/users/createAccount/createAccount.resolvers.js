import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, phone, size, orderMethod }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            AND: [
              {
                firstName,
              },
              {
                phone,
              },
            ],
          },
        });
        //유저가 이미 존재한다면,
        if (existingUser) {
          const makeOrder = await client.order.create({
            data: {
              userId: existingUser.id,
              orderMethod,
            },
          });
          return {
            ok: true,
          };
        } else {
          const newUser = await client.user.create({
            data: {
              firstName,
              lastName,
              size,
              phone,
            },
          });
          const newOrder = await client.order.create({
            data: {
              userId: newUser.id,
              orderMethod,
            },
          });
          return {
            ok: true,
          };
        }
      } catch (e) {
        return e;
      }
    },
  },
};
