import client from "../../client";
import bcrypt from "bcrypt";
import CryptoJS from "crypto-js";

export default {
  Mutation: {
    editPaidOrder: async (
      _,
      {
        id,
        //order Info
        status,
        //shipping Info
        addressName,
        shippingName,
        shippingPhone,
        shippingAddress,
        shippingDetailAddress,
        shippingZipCode,
      }
    ) => {
      //order model update
      const order = await client.order.findUnique({
        where: {
          id,
        },
      });
      if (!order) {
        return {
          ok: false,
          error: "Order not found.",
        };
      }
      const updateOrder = await client.order.update({
        where: {
          id,
        },
        data: {
          status,
          o_name: shippingName,
          o_phone: shippingPhone,
          o_address: shippingAddress,
          o_detailAddress: shippingDetailAddress,
          o_zipCode: shippingZipCode,
        },
      });
      if (!updateOrder) {
        return {
          ok: false,
          error: "update failed",
        };
      }

      //user 모델 업데이트
      const user = await client.user.findUnique({
        where: {
          id: order.userId,
        },
      });

      if (!user) {
        return {
          ok: false,
          error: "user not found",
        };
      }

      const updateUser = await client.user.update({
        where: {
          id: order.userId,
        },
        data: {
          d_address: shippingAddress,
          d_detailAddress: shippingDetailAddress,
          d_zipCode: shippingZipCode,
        },
      });

      if (!updateUser) {
        return {
          ok: false,
          error: "update user failed",
        };
      }

      const existAddress = await client.shippingAddress.findFirst({
        where: {
          userId: user.id,
          addressName,
        },
      });

      if (existAddress) {
        await client.shippingAddress.update({
          where: {
            id: existAddress.id,
          },
          data: {
            addressName,
            shippingName,
            shippingPhone,
            shippingAddress,
            shippingDetailAddress,
            shippingZipCode,
          },
        });
      } else {
        await client.shippingAddress.create({
          data: {
            addressName,
            shippingName,
            shippingPhone,
            shippingAddress,
            shippingDetailAddress,
            shippingZipCode,
            user: {
              connect: {
                id: updateUser.id,
              },
            },
          },
        });
      }

      return {
        ok: true,
      };
    },
  },
};
