/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `creditCard` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cvcNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `expireDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isSuperUser` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_userName_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "creditCard",
DROP COLUMN "cvcNumber",
DROP COLUMN "email",
DROP COLUMN "expireDate",
DROP COLUMN "isSuperUser",
DROP COLUMN "password",
DROP COLUMN "phone",
DROP COLUMN "size",
DROP COLUMN "updatedAt",
DROP COLUMN "userName";
