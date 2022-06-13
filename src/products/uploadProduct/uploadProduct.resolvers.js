import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import {
  processSizes,
  processColors,
  processProductSliderPictures,
} from "../product.utils";

export default {
  Mutation: {
    uploadProduct: async (
      _,
      {
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

        const existingProduct = await client.product.findFirst({
          where: {
            productName,
          },
        });

        if (existingProduct) {
          return {
            ok: false,
            error: "해당 제품이 이미 존재합니다",
          };
        }

        await client.product.create({
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
        return {
          ok: true,
          error: "Creation Succeed",
        };
      } catch (e) {
        return { ok: false, error: "can't create products" };
      }
    },
  },
};
