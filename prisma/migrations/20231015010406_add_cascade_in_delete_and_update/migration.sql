-- DropForeignKey
ALTER TABLE "acelerometers" DROP CONSTRAINT "acelerometers_collarId_fkey";

-- DropForeignKey
ALTER TABLE "gps" DROP CONSTRAINT "gps_collarId_fkey";

-- DropForeignKey
ALTER TABLE "heart-rates" DROP CONSTRAINT "heart-rates_collarId_fkey";

-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_userId_fkey";

-- DropForeignKey
ALTER TABLE "sounds" DROP CONSTRAINT "sounds_collarId_fkey";

-- DropForeignKey
ALTER TABLE "stresses" DROP CONSTRAINT "stresses_acelerometerId_fkey";

-- DropForeignKey
ALTER TABLE "stresses" DROP CONSTRAINT "stresses_collarId_fkey";

-- DropForeignKey
ALTER TABLE "stresses" DROP CONSTRAINT "stresses_heartRateId_fkey";

-- DropForeignKey
ALTER TABLE "stresses" DROP CONSTRAINT "stresses_soundId_fkey";

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stresses" ADD CONSTRAINT "stresses_soundId_fkey" FOREIGN KEY ("soundId") REFERENCES "sounds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stresses" ADD CONSTRAINT "stresses_acelerometerId_fkey" FOREIGN KEY ("acelerometerId") REFERENCES "acelerometers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stresses" ADD CONSTRAINT "stresses_heartRateId_fkey" FOREIGN KEY ("heartRateId") REFERENCES "heart-rates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stresses" ADD CONSTRAINT "stresses_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gps" ADD CONSTRAINT "gps_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sounds" ADD CONSTRAINT "sounds_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acelerometers" ADD CONSTRAINT "acelerometers_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heart-rates" ADD CONSTRAINT "heart-rates_collarId_fkey" FOREIGN KEY ("collarId") REFERENCES "collars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
