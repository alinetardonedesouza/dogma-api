/*
  Warnings:

  - Added the required column `token` to the `collars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "collars" ADD COLUMN     "token" TEXT NOT NULL;
