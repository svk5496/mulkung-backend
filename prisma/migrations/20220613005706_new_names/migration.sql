/*
  Warnings:

  - You are about to drop the column `name` on the `Color` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `ProductSliderPicture` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Size` table. All the data in the column will be lost.
  - Added the required column `color` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productSliderPicture` to the `ProductSliderPicture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Color" DROP COLUMN "name",
ADD COLUMN     "color" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductSliderPicture" DROP COLUMN "link",
ADD COLUMN     "productSliderPicture" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "name",
ADD COLUMN     "size" TEXT NOT NULL;
