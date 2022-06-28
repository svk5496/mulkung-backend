/*
  Warnings:

  - A unique constraint covering the columns `[is_default]` on the table `ShippingAddress` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ShippingAddress_is_default_key" ON "ShippingAddress"("is_default");
