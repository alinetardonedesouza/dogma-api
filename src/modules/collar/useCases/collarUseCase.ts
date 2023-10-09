import { Collar } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { logger } from "../../../utils/logger";
import { CollarProps } from "../dtos/collarDTOs";
import { CollarRepository } from "../repositories/collar.repository";

export class CollarUseCase {

  async create(petId: string, token: string): Promise<Collar> {

    const dataProps = {
      petId,
      token
    }

    const repositories = new CollarRepository()
    const collarCreated = await repositories.createCollar(dataProps)

    return collarCreated
  }

  async delete(id: CollarProps): Promise<Collar> {

    const repositories = new CollarRepository()
    const collarDeleted = await repositories.deleteCollar(id)

    return collarDeleted
  }

  async getCollarById(id: CollarProps): Promise<Collar> {

    const repositories = new CollarRepository()
    const collarFound = await repositories.findCollarById(id)

    if (!collarFound) {

      throw new AppError("Not found", 404)
    }

    return collarFound
  }

  async getCollarByPetId(petId: string): Promise<Collar> {

    const repositories = new CollarRepository()
    const collarFound = await repositories.findCollarByPetId(petId)

    if (!collarFound) {

      throw new AppError("Not found", 404)
    }

    return collarFound
  }
}