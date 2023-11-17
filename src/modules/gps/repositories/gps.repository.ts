import { prisma } from "../../../database/prisma/client";
import { Collar, GPS } from "@prisma/client";
import { CreateGPSProps, DeleteGPSProps, GetGPSByIdProps, UpdateGPSProps } from "../dtos/gpsDTOs";

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

  async getGPSByUserId(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        pets: {
          include: {
            Collar: {
              include: {
                gps: true
              }
            }
          }
        }
      }
    });
  
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
  
    const gpsList = user.pets
      .flatMap((pet) => pet.Collar || [])
      .flatMap((collar) => collar.gps || []);
  
    return gpsList;
  }
  


  async findGPSById(props: GetGPSByIdProps): Promise<GPS | null> {
    const finded = await prisma.gPS.findUnique({
      where: {
        id: props.id
      }
    });

    return finded;
  }

  async findGPSByToken(token: string): Promise<Collar | null> {
    const collar = await prisma.collar.findFirst({
      where: { token },
      include: {
        gps: true,
      },
    });

    return collar;
  }
}
