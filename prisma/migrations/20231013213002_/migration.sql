/*
  Warnings:

  - You are about to drop the column `value` on the `acelerometers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[petId]` on the table `collars` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `x` to the `acelerometers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `y` to the `acelerometers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `z` to the `acelerometers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "acelerometers" DROP COLUMN "value",
ADD COLUMN     "x" TEXT NOT NULL,
ADD COLUMN     "y" TEXT NOT NULL,
ADD COLUMN     "z" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "collars_petId_key" ON "collars"("petId");
