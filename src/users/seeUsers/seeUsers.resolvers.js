import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeUsers: async (
      _,
      { firstName, page, packageName, gender, startDate, endDate }
    ) => {
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
          totalUsers,
          totalPages: Math.ceil(totalUsers / 5),
        };
      }
      if (packageName === "모두" && gender === "모두") {
        //아무것도 입력이되지않은경우
        const Users = await client.user.findMany({
          where: {
            createdAt: {
              lt: endDate,
              gte: startDate,
            },
          },
          take: 10,
          skip: (page - 1) * 5,

          orderBy: {
            createdAt: "desc",
          },
        });

        const totalUsers = await client.user.count({
          where: {
            createdAt: {
              lt: endDate,
              gte: startDate,
            },
          },
        });
        return {
          ok: true,
          Users,
          totalUsers,

          totalPages: Math.ceil(totalUsers / 5),
        };
      }
      if (packageName !== "모두" && gender === "모두") {
        //아무것도 입력이되지않은경우
        const Users = await client.user.findMany({
          where: {
            order: {
              every: {
                product: {
                  packageName,
                },
              },
            },
            createdAt: {
              lt: endDate,
              gte: startDate,
            },
          },
          take: 10,
          skip: (page - 1) * 5,

          orderBy: {
            createdAt: "desc",
          },
        });

        const totalUsers = await client.user.count({
          where: {
            order: {
              every: {
                product: {
                  packageName,
                },
              },
            },
            createdAt: {
              lt: endDate,
              gte: startDate,
            },
          },
        });
        return {
          ok: true,
          Users,
          totalUsers,

          totalPages: Math.ceil(totalUsers / 5),
        };
      }
      if (packageName === "모두" && gender !== "모두") {
        //아무것도 입력이되지않은경우
        const Users = await client.user.findMany({
          where: {
            gender,
            createdAt: {
              lt: endDate,
              gte: startDate,
            },
          },
          take: 10,
          skip: (page - 1) * 5,

          orderBy: {
            createdAt: "desc",
          },
        });

        const totalUsers = await client.user.count({
          where: {
            gender,
            createdAt: {
              lt: endDate,
              gte: startDate,
            },
          },
        });
        return {
          ok: true,
          Users,
          totalUsers,

          totalPages: Math.ceil(totalUsers / 5),
        };
      }
      if (packageName !== "모두" && gender !== "모두") {
        //아무것도 입력이되지않은경우
        const Users = await client.user.findMany({
          where: {
            order: {
              every: {
                product: {
                  packageName,
                },
              },
            },
            gender,
            createdAt: {
              lt: endDate,
              gte: startDate,
            },
          },
          take: 10,
          skip: (page - 1) * 5,

          orderBy: {
            createdAt: "desc",
          },
        });

        const totalUsers = await client.user.count({
          where: {
            order: {
              every: {
                product: {
                  packageName,
                },
              },
            },
            gender,
            createdAt: {
              lt: endDate,
              gte: startDate,
            },
          },
        });
        return {
          ok: true,
          Users,
          totalUsers,

          totalPages: Math.ceil(totalUsers / 5),
        };
      }
    },
  },
};
