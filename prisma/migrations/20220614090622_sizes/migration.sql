-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" TEXT,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL;
