import { prisma } from "../../../database/prisma/client";
import { Acelerometer } from "@prisma/client";
import { CreateAcelerometerProps, UpdateAcelerometerProps, DeleteAcelerometerProps, GetAcelerometerByPetIdProps, GetAcelerometerByIdProps } from "../dtos/acelerometerDTOs";

export class AcelerometerRepository {

  async createAcelerometer(props: CreateAcelerometerProps): Promise<Acelerometer> {
    const created = await prisma.acelerometer.create({
      data: props
    });

    return created;
  }

  async updateAcelerometer(props: UpdateAcelerometerProps): Promise<Acelerometer> {
    const updated = await prisma.acelerometer.update({
      where: {
        id: props.id,
      },
      data: props.data,
    })

    return updated
  }

  async deleteAcelerometer(props: DeleteAcelerometerProps): Promise<Acelerometer> {
    const deleted = await prisma.acelerometer.delete({
      where: {
        id: props.id,
      }
    });

    return deleted;
  }

  async findAcelerometerByPetId(props: GetAcelerometerByPetIdProps): Promise<Acelerometer[] | null> {
    const finded = await prisma.acelerometer.findMany({
      where: {
        petId: props.petId
      }
    });

    return finded;
  }

  async findAcelerometerById(props: GetAcelerometerByIdProps): Promise<Acelerometer | null> {
    const finded = await prisma.acelerometer.findUnique({
      where: {
        id: props.id
      }
    });

    return finded;
  }
}
