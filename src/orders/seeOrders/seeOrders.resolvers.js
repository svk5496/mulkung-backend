import moment from "moment";
import client from "../../client";

export default {
  Query: {
    seeOrders: async (_, { firstName, phone, startDate, endDate, status }) => {
      if (firstName && phone && startDate && endDate) {
        const findUser = await client.user.findFirst({
          where: {
            AND: [{ firstName }, { phone }],
          },
        });

        const newOrders = await client.order.findMany({
          where: {
            userId: findUser.id,
            status,
          },
          orderBy: {
            createdAt: "desc",
          },
        });

        const filteredArray = [];
        //오더중에 날짜를 필터링하는 함수
        newOrders.filter((order) => {
          const createdDay = moment(order.createdAt); //order model에서 만들어진 날짜
          createdDay.isBetween(startDate, endDate); //만들어진 날짜가 startDate과 endDate 사이에 있는지
          if (createdDay.isBetween(startDate, endDate)) {
            //두 날짜 사이에 만들어진 날짜가 true라면 해당 order를 return하고, 아닐경우 null을 리턴
            filteredArray.push(order);
          }
        });
        return filteredArray;
      } else {
        //아무것도 입력이되지않은경우
        const newOrders = await client.order.findMany({
          where: {
            status,
          },
          orderBy: {
            createdAt: "desc",
          },
        });

        const filteredArray = [];
        //오더중에 날짜를 필터링하는 함수
        newOrders.filter((order) => {
          const createdDay = moment(order.createdAt); //order model에서 만들어진 날짜
          createdDay.isBetween(startDate, endDate); //만들어진 날짜가 startDate과 endDate 사이에 있는지
          if (createdDay.isBetween(startDate, endDate)) {
            //두 날짜 사이에 만들어진 날짜가 true라면 해당 order를 return하고, 아닐경우 null을 리턴
            filteredArray.push(order);
          }
        });
        return filteredArray;
      }
    },
  },
};
