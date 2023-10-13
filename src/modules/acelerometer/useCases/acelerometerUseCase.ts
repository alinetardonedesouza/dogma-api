import { Acelerometer } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { logger } from "../../../utils/logger";
import { AcelerometerRepository } from "../repositories/acelerometer.repository";
import { CreateAcelerometerProps, UpdateAcelerometerProps, DeleteAcelerometerProps, GetAcelerometerByCollarIdProps, GetAcelerometerByIdProps } from "../dtos/acelerometerDTOs";

export class AcelerometerUseCase {

  async create(data: CreateAcelerometerProps): Promise<Acelerometer> {

    const repositories = new AcelerometerRepository()
    const acelerometerCreated = await repositories.createAcelerometer(data)

    return acelerometerCreated
  }

  async update(props: UpdateAcelerometerProps): Promise<Acelerometer> {

    const repositories = new AcelerometerRepository()
    const updated = await repositories.updateAcelerometer(props)
    return updated
  }

  async delete(id: DeleteAcelerometerProps): Promise<Acelerometer> {

    const repositories = new AcelerometerRepository()
    const acelerometerDeleted = await repositories.deleteAcelerometer(id)

    return acelerometerDeleted
  }

  async getAcelerometerByCollarId(collarId: GetAcelerometerByCollarIdProps): Promise<Acelerometer[]> {

    const repositories = new AcelerometerRepository()
    const acelerometerFound = await repositories.findAcelerometerByCollarId(collarId)

    if (!acelerometerFound) {

      throw new AppError("Not found", 404)
    }

    return acelerometerFound
  }

  async getAcelerometerById(id: GetAcelerometerByIdProps): Promise<Acelerometer> {

    const repositories = new AcelerometerRepository()
    const acelerometerFound = await repositories.findAcelerometerById(id)

    if (!acelerometerFound) {

      throw new AppError("Not found", 404)
    }
    return acelerometerFound
  }

}