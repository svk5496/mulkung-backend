/*
  Warnings:

  - You are about to drop the column `is_default` on the `ShippingAddress` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ShippingAddress_is_default_key";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "o_address" TEXT,
ADD COLUMN     "o_detailAddress" TEXT,
ADD COLUMN     "o_name" TEXT,
ADD COLUMN     "o_phone" TEXT,
ADD COLUMN     "o_zipCode" TEXT;

-- AlterTable
ALTER TABLE "ShippingAddress" DROP COLUMN "is_default";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "d_address" TEXT,
ADD COLUMN     "d_detailAddress" TEXT,
ADD COLUMN     "d_zipCode" TEXT;
