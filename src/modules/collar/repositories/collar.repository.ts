import { Collar } from "@prisma/client";
import { prisma } from "../../../database/prisma/client";
import { CollarProps, CreateCollarProps } from "../dtos/collarDTOs";

export class CollarRepository {

  async createCollar(dataProps: CreateCollarProps): Promise<Collar> {
    const created = await prisma.collar.create({
      data: dataProps
    });

    return created;
  }

  async deleteCollar(props: CollarProps): Promise<Collar> {
    const deleted = await prisma.collar.delete({
      where: {
        id: props.id,
      }
    });

    return deleted;
  }

  async findCollarById(props: CollarProps): Promise<Collar | null> {
    const finded = await prisma.collar.findUnique({
      where: {
        id: props.id
      }
    });

    return finded;
  }

  async findCollarByPetId(petId: string): Promise<Collar | null> {
    const finded = await prisma.collar.findFirst({
      where: {
        petId
      }
    });

    return finded;
  }
}
