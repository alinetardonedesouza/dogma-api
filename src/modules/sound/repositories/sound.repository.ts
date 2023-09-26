import { prisma } from "../../../database/prisma/client";
import { Sound } from "@prisma/client";
import { CreateSoundProps, DeleteSoundProps, GetSoundByIdProps, GetSoundByPetIdProps, UpdateSoundProps } from "../dtos/soundDTOs";

export class SoundRepository {

  async createSound(props: CreateSoundProps): Promise<Sound> {
    const created = await prisma.sound.create({
      data: props
    });

    return created;
  }

  async updateSound(props: UpdateSoundProps): Promise<Sound> {
    const updated = await prisma.sound.update({
      where: {
        id: props.id,
      },
      data: props.data,
    })

    return updated
  }

  async deleteSound(props: DeleteSoundProps): Promise<Sound> {
    const deleted = await prisma.sound.delete({
      where: {
        id: props.id,
      }
    });

    return deleted;
  }

  async findSoundByPetId(props: GetSoundByPetIdProps): Promise<Sound[] | null> {
    const finded = await prisma.sound.findMany({
      where: {
        petId: props.petId
      }
    });

    return finded;
  }

  async findSoundById(props: GetSoundByIdProps): Promise<Sound | null> {
    const finded = await prisma.sound.findUnique({
      where: {
        id: props.id
      }
    });

    return finded;
  }
}
