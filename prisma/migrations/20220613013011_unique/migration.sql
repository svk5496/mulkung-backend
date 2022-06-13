/*
  Warnings:

  - A unique constraint covering the columns `[color]` on the table `Color` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productSliderPicture]` on the table `ProductSliderPicture` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[size]` on the table `Size` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Color_color_key" ON "Color"("color");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSliderPicture_productSliderPicture_key" ON "ProductSliderPicture"("productSliderPicture");

-- CreateIndex
CREATE UNIQUE INDEX "Size_size_key" ON "Size"("size");
