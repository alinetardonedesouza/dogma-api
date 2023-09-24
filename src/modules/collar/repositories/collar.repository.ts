import { Collar } from "@prisma/client";
import { prisma } from "../../../database/prisma/client";
import { CollarProps } from "../dtos/collarDTOs";

export class CollarRepository {

  async createCollar(): Promise<Collar> {
    const created = await prisma.collar.create({
      data: ''
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
}