import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import {
  processSizes,
  processColors,
  processProductSliderPictures,
} from "../product.utils";

export default {
  Mutation: {
    editProduct: async (
      _,
      {
        id,
        productName,
        isActive,
        price,
        adName,
        packageName,
        detailPage1,
        productSliderPicture,
      }
    ) => {
      try {
        let productSliderPictureObjs = [];
        if (productSliderPicture) {
          productSliderPictureObjs =
            processProductSliderPictures(productSliderPicture);
        }

        const existingProduct = await client.product.findUnique({
          where: {
            id,
          },
        });

        if (existingProduct) {
          const updateProduct = await client.product.update({
            where: {
              id,
            },
            data: {
              productName,
              isActive,
              adName,
              packageName,
              price,
              detailPage1,
              ...(productSliderPictureObjs.length > 0 && {
                productSliderPictures: {
                  connectOrCreate: productSliderPictureObjs,
                },
              }),
            },
          });
          if (updateProduct) {
            return {
              ok: true,
              error: "update Succeed",
            };
          }
        }

        return {
          ok: false,
          error: "해당 제품은 존재하지않습니다",
        };
      } catch (e) {
        return { ok: false, error: "can't create products" };
      }
    },
  },
};
