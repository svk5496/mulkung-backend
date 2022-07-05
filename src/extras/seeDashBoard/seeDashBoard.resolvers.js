import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeDashBoard: async (_, {}) => {
      const today = new Date();
      const myStartDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        0,
        0,
        0
      );
      const myEndDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        23,
        59,
        59
      );
      const totalUsers = await client.user.findMany({});
      const totalOrders = await client.order.findMany({});
      const totalRefunds = await client.orderItem.findMany({
        where: {
          status: "환불완료",
        },
      });
      console.log(totalUsers);

      const filteredUserArray = [];
      //오더중에 날짜를 필터링하는 함수
      totalUsers.filter((user) => {
        const userCreatedDay = moment(user.createdAt); //order model에서 만들어진 날짜
        if (userCreatedDay.isBetween(myStartDate, myEndDate)) {
          //두 날짜 사이에 만들어진 날짜가 true라면 해당 order를 return하고, 아닐경우 null을 리턴
          filteredUserArray.push(user);
        }
      });

      const filteredOrderArray = [];
      //오더중에 날짜를 필터링하는 함수
      totalOrders.filter((order) => {
        const createdDay = moment(order.createdAt); //order model에서 만들어진 날짜
        if (createdDay.isBetween(myStartDate, myEndDate)) {
          //두 날짜 사이에 만들어진 날짜가 true라면 해당 order를 return하고, 아닐경우 null을 리턴
          filteredOrderArray.push(order);
        }
      });

      const filteredRefundArray = [];
      //오더중에 날짜를 필터링하는 함수
      totalRefunds.filter((refund) => {
        const refundCreatedDay = moment(refund.createdAt); //order model에서 만들어진 날짜
        if (refundCreatedDay.isBetween(myStartDate, myEndDate)) {
          //두 날짜 사이에 만들어진 날짜가 true라면 해당 order를 return하고, 아닐경우 null을 리턴
          filteredRefundArray.push(refund);
        }
      });

      const countUsers = filteredUserArray.length;
      const countOrders = filteredOrderArray.length;
      const countRefunds = filteredRefundArray.length;

      return {
        ok: true,
        countUsers,
        countOrders,
        countRefunds,
      };
    },
  },
};
