export const processColors = (color) => {
  const colors = color.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|<>|12|]+[^,]+/g);
  return colors.map((color) => ({
    where: { color },
    create: { color },
  }));
};

export const processSizes = (caption) => {
  const sizes = caption.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|<>|12|]+[^,]+/g);
  return sizes.map((size) => ({
    where: { size },
    create: { size },
  }));
};

export const processProductSliderPictures = (productSliderPicture) => {
  const productSliderPictures = productSliderPicture.match(/[^,]+/g);
  return productSliderPictures.map((productSliderPicture) => ({
    where: { productSliderPicture },
    create: { productSliderPicture },
  }));
};
