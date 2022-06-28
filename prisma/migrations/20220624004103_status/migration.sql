/*
  Warnings:

  - You are about to drop the column `paid` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "paid",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT E'new';
