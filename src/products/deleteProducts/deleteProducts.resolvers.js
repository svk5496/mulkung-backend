import client from "../../client";

export default {
  Mutation: {
    deleteProduct: async (_, { id }) => {
      const product = await client.product.findUnique({
        where: {
          id,
        },
      });
      if (!product) {
        return {
          ok: false,
          error: "product not found.",
        };
      } else {
        await client.product.delete({
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
