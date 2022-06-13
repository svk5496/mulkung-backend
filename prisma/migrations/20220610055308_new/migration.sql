/*
  Warnings:

  - You are about to drop the `Color` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSliderPicture` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShippingAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Size` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ColorToProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToSize` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userName]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSliderPicture" DROP CONSTRAINT "ProductSliderPicture_productId_fkey";

-- DropForeignKey
ALTER TABLE "ShippingAddress" DROP CONSTRAINT "ShippingAddress_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ColorToProduct" DROP CONSTRAINT "_ColorToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_ColorToProduct" DROP CONSTRAINT "_ColorToProduct_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToSize" DROP CONSTRAINT "_ProductToSize_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToSize" DROP CONSTRAINT "_ProductToSize_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userName" TEXT;

-- DropTable
DROP TABLE "Color";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "ProductSliderPicture";

-- DropTable
DROP TABLE "ShippingAddress";

-- DropTable
DROP TABLE "Size";

-- DropTable
DROP TABLE "_ColorToProduct";

-- DropTable
DROP TABLE "_ProductToSize";

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");
