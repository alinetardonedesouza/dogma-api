import { prisma } from "../../../database/prisma/client";
import { Acelerometer, Collar } from "@prisma/client";
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

  async findAcelerometerByToken(token: string): Promise<Collar[] | null> {
    const collar = await prisma.collar.findMany({
      where: { token },
      include: {
        acelerometer: true,
      },
    });

    return collar;
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
