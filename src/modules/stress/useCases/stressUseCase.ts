import { Stress } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { logger } from "../../../utils/logger";
import { StressRepository } from "../repositories/stress.repository";
import { CreateStressProps, DeleteStressProps, GetStressByIdProps, GetStressByPetIdProps, StressProps, UpdateStressProps } from "../dtos/stressDTOs";

export class StressUseCase {

  async create(data: CreateStressProps): Promise<Stress> {

    const repositories = new StressRepository()
    const stressCreated = await repositories.createStress(data)

    return stressCreated
  }

  async update(props: UpdateStressProps): Promise<Stress> {

    const repositories = new StressRepository()
    const updated = await repositories.updateStress(props)
    return updated
  }

  async delete(id: DeleteStressProps): Promise<Stress> {

    const repositories = new StressRepository()
    const stressDeleted = await repositories.deleteStress(id)

    return stressDeleted
  }

  async getStressByPetId(petId: GetStressByPetIdProps): Promise<Stress[]> {

    const repositories = new StressRepository()
    const stressFound = await repositories.findStressByPetId(petId)

    if (!stressFound) {

      throw new AppError("Not found", 404)
    }

    return stressFound
  }

  async getStressById(id: GetStressByIdProps): Promise<Stress> {

    const repositories = new StressRepository()
    const stressFound = await repositories.findStressById(id)

    if (!stressFound) {

      throw new AppError("Not found", 404)
    }
    return stressFound
  }

}