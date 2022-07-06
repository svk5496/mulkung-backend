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
        price,
        detailPage1,
        detailPage2,
        color,
        size,
        productSliderPicture,
      }
    ) => {
      try {
        let colorObjs = [];
        if (color) {
          colorObjs = processColors(color);
        }

        let sizeObjs = [];
        if (size) {
          sizeObjs = processSizes(size);
        }

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
          if (productSliderPicture) {
            await client.productSliderPicture.deleteMany({
              where: {
                productId: existingProduct.id,
              },
            });
          }

          const updateProduct = await client.product.update({
            where: {
              id,
            },
            data: {
              productName,
              price,
              detailPage1,
              detailPage2,
              ...(colorObjs.length > 0 && {
                colors: {
                  connectOrCreate: colorObjs,
                },
              }),
              ...(sizeObjs.length > 0 && {
                sizes: {
                  connectOrCreate: sizeObjs,
                },
              }),
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
