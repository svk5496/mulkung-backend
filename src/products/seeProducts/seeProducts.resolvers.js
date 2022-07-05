import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeProducts: async (_, { productName }) => {
      if (productName) {
        const productWithName = await client.product.findMany({
          where: {
            productName,
          },
        });

        return productWithName;
      } else {
        //아무것도 입력이되지않은경우
        const newProducts = await client.product.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });

        return newProducts;
      }
    },
  },
};
