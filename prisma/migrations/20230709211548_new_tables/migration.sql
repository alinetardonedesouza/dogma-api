/*
  Warnings:

  - You are about to drop the `movie_rent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "movie_rent" DROP CONSTRAINT "movie_rent_movieId_fkey";

-- DropForeignKey
ALTER TABLE "movie_rent" DROP CONSTRAINT "movie_rent_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "movie_rent";

-- DropTable
DROP TABLE "movies";

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "sex" BOOLEAN NOT NULL,
    "collarId" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collars" (
    "id" TEXT NOT NULL,

    CONSTRAINT "collars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stresses" (
    "id" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "soundId" TEXT NOT NULL,
    "acelerometerId" TEXT NOT NULL,
    "heartRateId" TEXT NOT NULL,
    "totalValue" TEXT NOT NULL,

    CONSTRAINT "stresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gps" (
    "id" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "locale" TEXT NOT NULL,

    CONSTRAINT "gps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sounds" (
    "id" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "sounds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acelerometers" (
    "id" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "acelerometers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "heart-rates" (
    "id" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "heart-rates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pets_collarId_key" ON "pets"("collarId");

-- CreateIndex
CREATE UNIQUE INDEX "stresses_soundId_key" ON "stresses"("soundId");

-- CreateIndex
CREATE UNIQUE INDEX "stresses_acelerometerId_key" ON "stresses"("acelerometerId");

-- CreateIndex
CREATE UNIQUE INDEX "stresses_heartRateId_key" ON "stresses"("heartRateId");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stresses" ADD CONSTRAINT "stresses_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stresses" ADD CONSTRAINT "stresses_soundId_fkey" FOREIGN KEY ("soundId") REFERENCES "sounds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stresses" ADD CONSTRAINT "stresses_acelerometerId_fkey" FOREIGN KEY ("acelerometerId") REFERENCES "acelerometers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stresses" ADD CONSTRAINT "stresses_heartRateId_fkey" FOREIGN KEY ("heartRateId") REFERENCES "heart-rates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gps" ADD CONSTRAINT "gps_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sounds" ADD CONSTRAINT "sounds_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acelerometers" ADD CONSTRAINT "acelerometers_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heart-rates" ADD CONSTRAINT "heart-rates_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
