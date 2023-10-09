import { prisma } from "../../../database/prisma/client";
import { Pet } from "@prisma/client";
import { CreatePetsProps, DeletePetsProps, GetPetsByCollarIdProps, GetPetsByIdProps, GetPetsByUserIdProps, UpdatePetsProps } from "../dtos/petsDTOs";

export class PetRepository {

  async createPet(props: CreatePetsProps): Promise<Pet> {
    const created = await prisma.pet.create({
      data: props
    });

    return created;
  }

  async updatePet(props: UpdatePetsProps): Promise<Pet> {
    const updated = await prisma.pet.update({
      where: {
        id: props.id,
      },
      data: props.data,
    })

    return updated
  }

  async deletePet(props: DeletePetsProps): Promise<Pet> {
    const deleted = await prisma.pet.delete({
      where: {
        id: props.id,
      }
    });

    return deleted;
  }

  async findPetById(props: GetPetsByIdProps): Promise<Pet | null> {
    const finded = await prisma.pet.findUnique({
      where: {
        id: props.id
      }
    });

    return finded;
  }

  async findPetByUserId(props: GetPetsByUserIdProps): Promise<Pet[] | null> {
    const finded = await prisma.pet.findMany({
      where: {
        userId: props.userId
      }
    });

    return finded;
  }

  async findPetByCollarId(props: GetPetsByCollarIdProps): Promise<String> {
    // const finded = await prisma.pet.findMany({
    //   where: {
    //     collarId: props.collarId
    //   }
    // });

    return "";
  }
}
