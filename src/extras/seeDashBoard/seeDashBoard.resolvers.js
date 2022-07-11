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
      const day0 = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        0,
        0,
        0
      );
      const day1 = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 1,
        0,
        0,
        0
      );
      const day2 = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 2,
        0,
        0,
        0
      );
      const day3 = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 3,
        0,
        0,
        0
      );
      const day4 = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 4,
        0,
        0,
        0
      );
      const day5 = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 5,
        0,
        0,
        0
      );
      const day6 = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 6,
        0,
        0,
        0
      );
      const totalUsers = await client.user.findMany({});
      const totalOrders = await client.order.findMany({});
      const totalRefunds = await client.orderItem.findMany({
        where: { OR: [{ status: "환불접수" }, { status: "교환접수" }] },
      });

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

      //그래프 Info
      //오늘 랜딩 1
      const day0Landing1Orders = await client.order.count({
        where: {
          productId: 1,
          createdAt: {
            lt: myEndDate,
            gte: myStartDate,
          },
        },
      });

      const day1Landing1Orders = await client.order.count({
        where: {
          productId: 1,
          createdAt: {
            lt: day0,
            gte: day1,
          },
        },
      });

      const day2Landing1Orders = await client.order.count({
        where: {
          productId: 1,
          createdAt: {
            lt: day1,
            gte: day2,
          },
        },
      });

      const day3Landing1Orders = await client.order.count({
        where: {
          productId: 1,
          createdAt: {
            lt: day2,
            gte: day3,
          },
        },
      });

      const day4Landing1Orders = await client.order.count({
        where: {
          productId: 1,
          createdAt: {
            lt: day3,
            gte: day4,
          },
        },
      });

      const day5Landing1Orders = await client.order.count({
        where: {
          productId: 1,
          createdAt: {
            lt: day4,
            gte: day5,
          },
        },
      });

      const day6Landing1Orders = await client.order.count({
        where: {
          productId: 1,
          createdAt: {
            lt: day5,
            gte: day6,
          },
        },
      });

      const day0Landing2Orders = await client.order.count({
        where: {
          productId: 2,
          createdAt: {
            lt: myEndDate,
            gte: myStartDate,
          },
        },
      });

      const day1Landing2Orders = await client.order.count({
        where: {
          productId: 2,
          createdAt: {
            lt: day0,
            gte: day1,
          },
        },
      });

      const day2Landing2Orders = await client.order.count({
        where: {
          productId: 2,
          createdAt: {
            lt: day1,
            gte: day2,
          },
        },
      });

      const day3Landing2Orders = await client.order.count({
        where: {
          productId: 2,
          createdAt: {
            lt: day2,
            gte: day3,
          },
        },
      });

      const day4Landing2Orders = await client.order.count({
        where: {
          productId: 2,
          createdAt: {
            lt: day3,
            gte: day4,
          },
        },
      });

      const day5Landing2Orders = await client.order.count({
        where: {
          productId: 2,
          createdAt: {
            lt: day4,
            gte: day5,
          },
        },
      });

      const day6Landing2Orders = await client.order.count({
        where: {
          productId: 2,
          createdAt: {
            lt: day5,
            gte: day6,
          },
        },
      });

      const chart1Object = [
        {
          name: "주문수",
          data: [
            day6Landing1Orders,
            day5Landing1Orders,
            day4Landing1Orders,
            day3Landing1Orders,
            day2Landing1Orders,
            day1Landing1Orders,
            day0Landing1Orders,
          ],
        },
      ];

      const chart2Object = [
        {
          name: "주문수",
          data: [
            day6Landing2Orders,
            day5Landing2Orders,
            day4Landing2Orders,
            day3Landing2Orders,
            day2Landing2Orders,
            day1Landing2Orders,
            day0Landing2Orders,
          ],
        },
      ];

      const landing1TotalPurchase =
        day6Landing1Orders +
        day5Landing1Orders +
        day4Landing1Orders +
        day3Landing1Orders +
        day2Landing1Orders +
        day1Landing1Orders +
        day0Landing1Orders;

      const landing2TotalPurchase =
        day6Landing2Orders +
        day5Landing2Orders +
        day4Landing2Orders +
        day3Landing2Orders +
        day2Landing2Orders +
        day1Landing2Orders +
        day0Landing2Orders;

      return {
        ok: true,
        countUsers,
        countOrders,
        countRefunds,
        landing1TotalPurchase,
        landing2TotalPurchase,
        chart1Object,
        chart2Object,
      };
    },
  },
};
