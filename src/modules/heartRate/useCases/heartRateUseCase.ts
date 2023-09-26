import { HeartRate } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { logger } from "../../../utils/logger";
import { HeartRateRepository } from "../repositories/heartRate.repository";
import { CreateHeartRateProps, UpdateHeartRateProps, DeleteHeartRateProps, GetHeartRateByPetIdProps, GetHeartRateByIdProps } from "../dtos/heartRateDTOs";

export class HeartRateUseCase {

  async create(data: CreateHeartRateProps): Promise<HeartRate> {

    const repositories = new HeartRateRepository()
    const heartRateCreated = await repositories.createHeartRate(data)

    return heartRateCreated
  }

  async update(props: UpdateHeartRateProps): Promise<HeartRate> {

    const repositories = new HeartRateRepository()
    const updated = await repositories.updateHeartRate(props)
    return updated
  }

  async delete(id: DeleteHeartRateProps): Promise<HeartRate> {

    const repositories = new HeartRateRepository()
    const heartRateDeleted = await repositories.deleteHeartRate(id)

    return heartRateDeleted
  }

  async getHeartRateByPetId(petId: GetHeartRateByPetIdProps): Promise<HeartRate[]> {

    const repositories = new HeartRateRepository()
    const heartRateFound = await repositories.findHeartRateByPetId(petId)

    if (!heartRateFound) {

      throw new AppError("Not found", 404)
    }

    return heartRateFound
  }

  async getHeartRateById(id: GetHeartRateByIdProps): Promise<HeartRate> {

    const repositories = new HeartRateRepository()
    const heartRateFound = await repositories.findHeartRateById(id)

    if (!heartRateFound) {

      throw new AppError("Not found", 404)
    }
    return heartRateFound
  }

}