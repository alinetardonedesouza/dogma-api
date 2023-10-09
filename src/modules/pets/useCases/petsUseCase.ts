import { AppError } from "../../../errors/AppError";
import { logger } from "../../../utils/logger";
import { PetRepository } from "../repositories/pets.repository";
import { CreatePetsProps, DeletePetsProps, GetPetsByCollarIdProps, GetPetsByIdProps, GetPetsByUserIdProps, UpdatePetsProps } from "../dtos/petsDTOs";
import { Pet } from "@prisma/client";
import { CollarUseCase } from "../../collar/useCases/collarUseCase";

export class PetsUseCase {

  async create(data: CreatePetsProps): Promise<Pet> {

    try {

      const petData = {
        userId: data.userId,
        name: data.name,
        age: data.age,
        breed: data.breed,
        sex: data.sex,
      }
      const petRepository = new PetRepository()
      const petCreated = await petRepository.createPet(petData)

      if (petCreated.id && data.token) {

        const collarUseCase = new CollarUseCase()
        const collarCreated = await collarUseCase.create(petCreated.id, data.token)
      }

      return petCreated

    } catch (error) {

      throw new AppError(String(error))

    }
  }

  async update(props: UpdatePetsProps): Promise<Pet> {

    const repositories = new PetRepository()
    const updated = await repositories.updatePet(props)
    return updated
  }

  async delete(id: DeletePetsProps): Promise<Pet> {

    const repositories = new PetRepository()
    const PetDeleted = await repositories.deletePet(id)

    return PetDeleted
  }

  async getPetsById(id: GetPetsByIdProps): Promise<Pet> {

    const repositories = new PetRepository()
    const petFound = await repositories.findPetById(id)

    if (!petFound) {

      throw new AppError("Not found", 404)
    }

    return petFound
  }

  async getPetsByUserId(userId: GetPetsByUserIdProps): Promise<Pet[]> {

    const repositories = new PetRepository()
    const petFound = await repositories.findPetByUserId(userId)

    if (!petFound) {

      throw new AppError("Not found", 404)
    }
    return petFound
  }

  // async getPetsByCollarId(collarId: GetPetsByCollarIdProps): Promise<Pet[]> {

  //   const repositories = new PetRepository()
  //   const petFound = await repositories.findPetByCollarId(collarId)

  //   if (!petFound) {

  //     throw new AppError("Not found", 404)
  //   }

  //   return petFound
  // }
}