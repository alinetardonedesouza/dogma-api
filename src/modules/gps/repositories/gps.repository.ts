import { prisma } from "../../../database/prisma/client";
import { GPS } from "@prisma/client";
import { CreateGPSProps, DeleteGPSProps, GetGPSByIdProps, GetGPSByPetIdProps, UpdateGPSProps } from "../dtos/gpsDTOs";

export class GPSRepository {

  async createGPS(props: CreateGPSProps): Promise<GPS> {
    const created = await prisma.gPS.create({
      data: props
    });

    return created;
  }

  async updateGPS(props: UpdateGPSProps): Promise<GPS> {
    const updated = await prisma.gPS.update({
      where: {
        id: props.id,
      },
      data: props.data,
    })

    return updated
  }

  async deleteGPS(props: DeleteGPSProps): Promise<GPS> {
    const deleted = await prisma.gPS.delete({
      where: {
        id: props.id,
      }
    });

    return deleted;
  }

  async findGPSByPetId(props: GetGPSByPetIdProps): Promise<GPS[] | null> {
    const finded = await prisma.gPS.findMany({
      where: {
        petId: props.petId
      }
    });

    return finded;
  }

  async findGPSById(props: GetGPSByIdProps): Promise<GPS | null> {
    const finded = await prisma.gPS.findUnique({
      where: {
        id: props.id
      }
    });

    return finded;
  }
}
