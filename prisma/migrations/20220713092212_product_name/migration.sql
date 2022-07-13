-- DropIndex
DROP INDEX "Product_productName_key";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "productName" DROP NOT NULL;
