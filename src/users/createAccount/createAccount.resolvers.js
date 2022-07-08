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
        age,
        orderMethod,
        productId,
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
              orderMethod,
              product: {
                connect: {
                  id: productId,
                },
              },
              user: {
                connect: {
                  id: existingUser.id,
                },
              },
            },
          });
          if (!makeOrder) {
            return {
              ok: false,
              error: "can't make new order",
            };
          }
          return {
            ok: true,
          };
        }
        {
          //유저가 존재하지 않고, 패스워드를 입력받은경우.
          if (password && !existingUser) {
            const uglyPassword = await bcrypt.hash(password, 10);

            const newSuperUser = await client.user.create({
              data: {
                firstName,
                lastName,
                username,
                password: uglyPassword,
                size,
                age,
                phone,
                isSuperUser,
              },
            });

            return {
              ok: true,
            };
          }
        }
        {
          if (!password && !existingUser) {
            //유저가 존재하지않고, 패스워드도 없는경우 (오더가 들어온경우.)
            const newUser = await client.user.create({
              data: {
                firstName,
                lastName,
                username,
                size,
                age,
                phone,
                isSuperUser,
              },
            });

            const newOrder = await client.order.create({
              data: {
                product: {
                  connect: {
                    id: productId,
                  },
                },
                user: {
                  connect: {
                    id: newUser.id,
                  },
                },
                orderMethod,
              },
            });

            return {
              ok: true,
            };
          }
        }
      } catch (e) {
        return e;
      }
    },
  },
};
