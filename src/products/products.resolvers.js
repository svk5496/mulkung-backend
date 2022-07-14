import client from "../client";

export default {
  Product: {
    productSliderPictures: ({ id }) =>
      client.product.findUnique({ where: { id } }).productSliderPictures(),

    totalOrderAmount: ({ id }) =>
      client.order.count({
        where: {
          productId: id,
        },
      }),
  },
};
