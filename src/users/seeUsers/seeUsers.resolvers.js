import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeUsers: async (_, { firstName, page }) => {
      if (firstName) {
        const userWithName = await client.user.findMany({
          where: {
            firstName,
          },
          take: 10,
          skip: (page - 1) * 5,
        });

        const totalUsers = await client.user.count({
          where: {
            firstName,
          },
        });

        return {
          ok: true,
          Users: userWithName,
          totalPages: Math.ceil(totalUsers / 5),
        };
      }
      //아무것도 입력이되지않은경우
      const Users = await client.user.findMany({
        take: 10,
        skip: (page - 1) * 5,
        orderBy: {
          createdAt: "desc",
        },
      });

      const totalUsers = await client.user.count({});
      return {
        ok: true,
        Users,
        totalPages: Math.ceil(totalUsers / 5),
      };
    },
  },
};
