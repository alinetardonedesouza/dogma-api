import { prisma } from "../../../database/prisma/client";
import { Acelerometer } from "@prisma/client";
import { CreateAcelerometerProps, UpdateAcelerometerProps, DeleteAcelerometerProps, GetAcelerometerByCollarIdProps, GetAcelerometerByIdProps } from "../dtos/acelerometerDTOs";
import { logger } from "../../../utils/logger";

export class AcelerometerRepository {

  async createAcelerometer(props: CreateAcelerometerProps): Promise<Acelerometer> {
    logger.info(props)
    const created = await prisma.acelerometer.create({
      data: {...props}
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

  async findAcelerometerByCollarId(props: GetAcelerometerByCollarIdProps): Promise<Acelerometer[] | null> {
    const finded = await prisma.acelerometer.findMany({
      where: {
        collarId: props.collarId
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
