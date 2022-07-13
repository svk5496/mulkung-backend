/*
  Warnings:

  - You are about to drop the column `productId` on the `ProductSliderPicture` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductSliderPicture" DROP CONSTRAINT "ProductSliderPicture_productId_fkey";

-- AlterTable
ALTER TABLE "ProductSliderPicture" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_ProductToProductSliderPicture" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductSliderPicture_AB_unique" ON "_ProductToProductSliderPicture"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductSliderPicture_B_index" ON "_ProductToProductSliderPicture"("B");

-- AddForeignKey
ALTER TABLE "_ProductToProductSliderPicture" ADD FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductSliderPicture" ADD FOREIGN KEY ("B") REFERENCES "ProductSliderPicture"("id") ON DELETE CASCADE ON UPDATE CASCADE;
