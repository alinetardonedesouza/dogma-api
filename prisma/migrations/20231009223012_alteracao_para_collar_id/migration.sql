/*
  Warnings:

  - You are about to drop the column `petId` on the `acelerometers` table. All the data in the column will be lost.
  - You are about to drop the column `petId` on the `gps` table. All the data in the column will be lost.
  - You are about to drop the column `petId` on the `heart-rates` table. All the data in the column will be lost.
  - You are about to drop the column `collarId` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the column `petId` on the `sounds` table. All the data in the column will be lost.
  - You are about to drop the column `petId` on the `stresses` table. All the data in the column will be lost.
  - Added the required column `collarId` to the `acelerometers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petId` to the `collars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collarId` to the `gps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collarId` to the `heart-rates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collarId` to the `sounds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collarId` to the `stresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "acelerometers" DROP CONSTRAINT "acelerometers_petId_fkey";

-- DropForeignKey
ALTER TABLE "gps" DROP CONSTRAINT "gps_petId_fkey";

-- DropForeignKey
ALTER TABLE "heart-rates" DROP CONSTRAINT "heart-rates_petId_fkey";

-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_collarId_fkey";

-- DropForeignKey
ALTER TABLE "sounds" DROP CONSTRAINT "sounds_petId_fkey";

-- DropForeignKey
ALTER TABLE "stresses" DROP CONSTRAINT "stresses_petId_fkey";

-- DropIndex
DROP INDEX "pets_collarId_key";

-- AlterTable
ALTER TABLE "acelerometers" DROP COLUMN "petId",
ADD COLUMN     "collarId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "collars" ADD COLUMN     "petId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "gps" DROP COLUMN "petId",
ADD COLUMN     "collarId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "heart-rates" DROP COLUMN "petId",
ADD COLUMN     "collarId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "collarId";

-- AlterTable
ALTER TABLE "sounds" DROP COLUMN "petId",
ADD COLUMN     "collarId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "stresses" DROP COLUMN "petId",
ADD COLUMN     "collarId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "collars" ADD CONSTRAINT "collars_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stresses" ADD CONSTRAINT "stresses_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gps" ADD CONSTRAINT "gps_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sounds" ADD CONSTRAINT "sounds_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acelerometers" ADD CONSTRAINT "acelerometers_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heart-rates" ADD CONSTRAINT "heart-rates_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
