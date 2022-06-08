-- CreateTable
CREATE TABLE "ProductSliderPicture" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "order" INTEGER,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductSliderPicture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductSliderPicture" ADD CONSTRAINT "ProductSliderPicture_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
