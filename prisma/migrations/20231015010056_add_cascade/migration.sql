-- DropForeignKey
ALTER TABLE "collars" DROP CONSTRAINT "collars_petId_fkey";

-- AddForeignKey
ALTER TABLE "collars" ADD CONSTRAINT "collars_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
