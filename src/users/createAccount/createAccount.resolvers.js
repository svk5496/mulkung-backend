import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      {
        firstName,
        username,
        email,
        password,
        lastName,
        phone,
        size,
        orderMethod,
        isSuperUser,
      }
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
          const uglyPassword = await bcrypt.hash(password, 10);

          const newUser = await client.user.create({
            data: {
              firstName,
              lastName,
              username,
              password: uglyPassword,
              size,
              phone,
              isSuperUser,
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
