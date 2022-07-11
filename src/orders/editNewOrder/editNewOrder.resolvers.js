import client from "../../client";
import bcrypt from "bcrypt";
import CryptoJS from "crypto-js";

export default {
  Mutation: {
    editNewOrder: async (
      _,
      {
        id,
        age,
        //order Info
        status,
        //shipping Info
        addressName,
        shippingName,
        shippingPhone,
        shippingAddress,
        shippingDetailAddress,
        shippingZipCode,
        //User Info
        creditCard,
        expireDate,
        cvcNumber,
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

      //신용카드 암호화

      const secretKey = process.env.CRYPTO_JS_KEY;
      const salt = process.env.CRYPTO_JS_SALT;

      // CryptoJS AES 128 암호화
      const secretKeyUtf = CryptoJS.enc.Utf8.parse(secretKey);
      const ivutf = CryptoJS.enc.Utf8.parse(salt);

      var encObj = CryptoJS.AES.encrypt(creditCard, secretKeyUtf, {
        iv: ivutf,
      });

      var uglyCreditCard = encObj + "";

      var encObj = CryptoJS.AES.encrypt(cvcNumber, secretKeyUtf, {
        iv: ivutf,
      });

      var uglyCvcNumber = encObj + "";

      const updateUser = await client.user.update({
        where: {
          id: order.userId,
        },
        data: {
          age,
          creditCard: uglyCreditCard,
          expireDate,
          cvcNumber: uglyCvcNumber,
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
