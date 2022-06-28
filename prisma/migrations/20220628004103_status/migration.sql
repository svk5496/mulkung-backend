/*
  Warnings:

  - You are about to drop the column `refund` on the `OrderItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "refund",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT E'배송완료';
