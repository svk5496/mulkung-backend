import client from "../../client";

export default {
  Query: {
    searchUser: async (_, { firstName, phone }) => {
      const Users = await client.user.findMany({
        where: {
          firstName,
          phone,
        },
      });
      console.log(Users);
      return Users;
    },
  },
};
