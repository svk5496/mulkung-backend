/*
  Warnings:

  - Changed the type of `is_default` on the `ShippingAddress` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ShippingAddress" DROP COLUMN "is_default",
ADD COLUMN     "is_default" BOOLEAN NOT NULL;
