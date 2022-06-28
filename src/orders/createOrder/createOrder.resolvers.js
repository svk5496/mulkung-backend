import client from "../../client";
import bcrypt from "bcrypt";
import CryptoJS from "crypto-js";
import { now } from "moment";

export default {
  Mutation: {
    createOrder: async (
      _,
      {
        firstName,
        phone,
        //order Info
        status,
        orderMethod,
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

      //user 모델 업데이트
      const findUser = await client.user.findFirst({
        where: { AND: [{ firstName }, { phone }] },
      });

      if (!findUser) {
        const newUser = await client.user.create({
          data: {
            firstName,
            phone,
            creditCard: uglyCreditCard,
            expireDate,
            cvcNumber: uglyCvcNumber,
            d_address: shippingAddress,
            d_detailAddress: shippingDetailAddress,
            d_zipCode: shippingZipCode,
          },
        });

        await client.order.create({
          data: {
            user: {
              connect: {
                id: newUser.id,
              },
            },
            status,
            orderMethod,
            o_name: shippingName,
            o_phone: shippingPhone,
            o_address: shippingAddress,
            o_detailAddress: shippingDetailAddress,
            o_zipCode: shippingZipCode,
          },
        });
      }

      await client.order.create({
        data: {
          user: {
            connect: {
              id: findUser.id,
            },
          },

          status,
          orderMethod,
          o_name: shippingName,
          o_phone: shippingPhone,
          o_address: shippingAddress,
          o_detailAddress: shippingDetailAddress,
          o_zipCode: shippingZipCode,
        },
      });

      const updateUser = await client.user.update({
        where: {
          id: findUser.id,
        },
        data: {
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

      return {
        ok: true,
      };
    },
  },
};
