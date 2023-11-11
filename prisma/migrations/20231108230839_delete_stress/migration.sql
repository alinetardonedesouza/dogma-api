/*
  Warnings:

  - You are about to drop the `heart-rates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `stresses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "heart-rates" DROP CONSTRAINT "heart-rates_collarId_fkey";

-- DropForeignKey
ALTER TABLE "stresses" DROP CONSTRAINT "stresses_acelerometerId_fkey";

-- DropForeignKey
ALTER TABLE "stresses" DROP CONSTRAINT "stresses_collarId_fkey";

-- DropForeignKey
ALTER TABLE "stresses" DROP CONSTRAINT "stresses_heartRateId_fkey";

-- DropForeignKey
ALTER TABLE "stresses" DROP CONSTRAINT "stresses_soundId_fkey";

-- DropTable
DROP TABLE "heart-rates";

-- DropTable
DROP TABLE "stresses";
