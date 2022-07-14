import client from "../../client";

export default {
  Mutation: {
    activeProduct: async (_, { id, isActive }) => {
      try {
        const existingProduct = await client.product.findUnique({
          where: {
            id,
          },
        });

        if (existingProduct) {
          const updateProduct = await client.product.update({
            where: {
              id,
            },
            data: {
              isActive,
            },
          });
          if (updateProduct) {
            return {
              ok: true,
              error: "update Succeed",
            };
          }
        }

        return {
          ok: false,
          error: "해당 제품은 존재하지않습니다",
        };
      } catch (e) {
        return { ok: false, error: "can't create products" };
      }
    },
  },
};
