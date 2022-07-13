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
        adName,
        packageName,
        detailPage1,
        productSliderPicture,
      }
    ) => {
      try {
        // let colorObjs = [];
        // if (color) {
        //   colorObjs = processColors(color);
        // }

        // let sizeObjs = [];
        // if (size) {
        //   sizeObjs = processSizes(size);
        // }

        let productSliderPictureObjs = [];
        if (productSliderPicture) {
          productSliderPictureObjs =
            processProductSliderPictures(productSliderPicture);
        }

        await client.product.create({
          data: {
            productName,
            adName,
            packageName,
            price,
            detailPage1,
            // ...(colorObjs.length > 0 && {
            //   colors: {
            //     connectOrCreate: colorObjs,
            //   },
            // }),
            // ...(sizeObjs.length > 0 && {
            //   sizes: {
            //     connectOrCreate: sizeObjs,
            //   },
            // }),
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
