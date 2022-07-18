import client from "../../client";

export default {
  Query: {
    searchUser: async (
      _,
      { firstName, phone, adName, packageName, startDate, endDate }
    ) => {
      console.log(firstName);
      const Users = await client.user.findMany({
        where: {
          firstName,
          phone,
          createdAt: {
            lt: startDate,
            gte: endDate,
          },
        },
      });
      return Users;
    },
  },
};
