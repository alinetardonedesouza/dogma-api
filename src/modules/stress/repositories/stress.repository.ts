import { prisma } from "../../../database/prisma/client";
import { Stress } from "@prisma/client";
import { CreateStressProps, DeleteStressProps, GetStressByIdProps, GetStressByCollarIdProps, UpdateStressProps } from "../dtos/stressDTOs";

export class StressRepository {

  async createStress(props: CreateStressProps): Promise<Stress> {
    const created = await prisma.stress.create({
      data: props
    });

    return created;
  }

  async updateStress(props: UpdateStressProps): Promise<Stress> {
    const updated = await prisma.stress.update({
      where: {
        id: props.id,
      },
      data: props.data,
    })

    return updated
  }

  async deleteStress(props: DeleteStressProps): Promise<Stress> {
    const deleted = await prisma.stress.delete({
      where: {
        id: props.id,
      }
    });

    return deleted;
  }

  async findStressByCollarId(props: GetStressByCollarIdProps): Promise<Stress[] | null> {
    const finded = await prisma.stress.findMany({
      where: {
        collarId: props.collarId
      }
    });

    return finded;
  }

  async findStressById(props: GetStressByIdProps): Promise<Stress | null> {
    const finded = await prisma.stress.findUnique({
      where: {
        id: props.id
      }
    });

    return finded;
  }
}
