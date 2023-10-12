import { GPS } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { logger } from "../../../utils/logger";
import { GPSRepository } from "../repositories/gps.repository";
import { CreateGPSProps, DeleteGPSProps, GetGPSByIdProps, GetGPSByPetIdProps, GetGPSByUserIdProps, UpdateGPSProps } from "../dtos/gpsDTOs";

export class GPSUseCase {

  async create(data: CreateGPSProps): Promise<GPS> {

    const repositories = new GPSRepository()
    const GPSCreated = await repositories.createGPS(data)

    return GPSCreated
  }

  async update(props: UpdateGPSProps): Promise<GPS> {

    const repositories = new GPSRepository()
    const updated = await repositories.updateGPS(props)
    return updated
  }

  async delete(id: DeleteGPSProps): Promise<GPS> {

    const repositories = new GPSRepository()
    const GPSDeleted = await repositories.deleteGPS(id)

    return GPSDeleted
  }

  async getGPSByUserId(userId: string): Promise<GPS[]> {

    const repositories = new GPSRepository()
    const GPSFound = await repositories.getGPSByUserId(userId)

    if (!GPSFound) {

      throw new AppError("Not found", 404)
    }

    return GPSFound
  }

  async getGPSById(id: GetGPSByIdProps): Promise<GPS> {

    const repositories = new GPSRepository()
    const GPSFound = await repositories.findGPSById(id)

    if (!GPSFound) {

      throw new AppError("Not found", 404)
    }
    return GPSFound
  }

}