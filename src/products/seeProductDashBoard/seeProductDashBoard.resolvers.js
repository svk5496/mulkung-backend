import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeProductDashBoard: async (_, { id }) => {
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
      const countOrders = await client.order.count({
        where: {
          productId: id,
        },
      });
      const countOrderItems = await client.orderItem.count({
        where: { productId: id },
      });

      //그래프 Info
      //오늘 랜딩 1
      const day0Orders = await client.order.count({
        where: {
          productId: id,
          createdAt: {
            lt: myEndDate,
            gte: myStartDate,
          },
        },
      });

      const day1Orders = await client.order.count({
        where: {
          productId: id,
          createdAt: {
            lt: day0,
            gte: day1,
          },
        },
      });

      const day2Orders = await client.order.count({
        where: {
          productId: id,
          createdAt: {
            lt: day1,
            gte: day2,
          },
        },
      });

      const day3Orders = await client.order.count({
        where: {
          productId: id,
          createdAt: {
            lt: day2,
            gte: day3,
          },
        },
      });

      const day4Orders = await client.order.count({
        where: {
          productId: id,
          createdAt: {
            lt: day3,
            gte: day4,
          },
        },
      });

      const day5Orders = await client.order.count({
        where: {
          productId: id,
          createdAt: {
            lt: day4,
            gte: day5,
          },
        },
      });

      const day6Orders = await client.order.count({
        where: {
          productId: id,
          createdAt: {
            lt: day5,
            gte: day6,
          },
        },
      });

      const TotalPurchase7Days =
        day6Orders +
        day5Orders +
        day4Orders +
        day3Orders +
        day2Orders +
        day1Orders +
        day0Orders;

      const chart1Object = [
        {
          name: "주문수",
          data: [
            day6Orders,
            day5Orders,
            day4Orders,
            day3Orders,
            day2Orders,
            day1Orders,
            day0Orders,
          ],
        },
      ];

      return {
        ok: true,
        countOrders,
        countOrderItems,
        TotalPurchase7Days,
        chart1Object,
      };
    },
  },
};
