import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeProducts: async (_, { adName, isActive, packageName }) => {
      if (adName && packageName && isActive) {
        if (packageName === "all") {
          const productadName = await client.product.findMany({
            where: {
              adName: {
                contains: adName,
              },
              isActive,
            },
          });
          return productadName;
        }
        const productadName = await client.product.findMany({
          where: {
            adName: {
              contains: adName,
            },
            isActive,
            packageName,
          },
        });

        return productadName;
      }
      //검색어가 없는경우
      if (packageName && isActive) {
        if (packageName === "all") {
          const productadName = await client.product.findMany({
            where: {
              isActive,
            },
          });
          return productadName;
        }
        const productadName = await client.product.findMany({
          where: {
            isActive,
            packageName,
          },
        });

        return productadName;
      }
      //아무고토 없는경우
      const products = await client.product.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return products;
    },
  },
};
