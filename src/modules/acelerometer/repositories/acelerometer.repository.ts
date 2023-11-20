import { prisma } from "../../../database/prisma/client";
import { Acelerometer, Collar } from "@prisma/client";
import { CreateAcelerometerProps, UpdateAcelerometerProps, DeleteAcelerometerProps, GetAcelerometerByCollarIdProps, GetAcelerometerByIdProps } from "../dtos/acelerometerDTOs";
import { logger } from "../../../utils/logger";
import { AcelerometerCounts } from "../../../utils/acelerometerCounts";
import { addHours, subHours } from 'date-fns';

interface StatusObj {
  id: string;
  collarId: string;
  status: string;
}
export class AcelerometerRepository {

  async createAcelerometer(props: CreateAcelerometerProps): Promise<Acelerometer> {
    logger.info(props)
    const created = await prisma.acelerometer.create({
      data: { ...props }
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

  async findAcelerometerByToken(token: string): Promise<StatusObj[] | null> {

    const now = new Date();
    const oneHourAgo = subHours(now, 1);

    const collar = await prisma.collar.findMany({
      where: {
        token,
      },
      include: {
        acelerometer: {
          where: {
            created_at: {
              gte: oneHourAgo,
              lte: now,
            },
          },
        },
      },
    });

    if (collar.length > 0) {
      const acelerometerCounts = new AcelerometerCounts();
      const acelerometerData = acelerometerCounts.extrairDadosAcelerometro(collar[0].acelerometer);

      return acelerometerData;
    } else {
      return null;
    }
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
