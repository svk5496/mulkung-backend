import client from "../../client";

export default {
  Mutation: {
    deleteUser: async (_, { id }) => {
      const user = await client.user.findUnique({
        where: {
          id,
        },
      });
      if (!user) {
        return {
          ok: false,
          error: "user not found.",
        };
      } else {
        if (!user.isSuperUser) {
          await client.user.delete({
            where: {
              id,
            },
          });
          return {
            ok: true,
          };
        }
      }
    },
  },
};
