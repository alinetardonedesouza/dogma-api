import { Sound } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { logger } from "../../../utils/logger";
import { SoundRepository } from "../repositories/sound.repository";
import { CreateSoundProps, UpdateSoundProps, DeleteSoundProps, GetSoundByPetIdProps, GetSoundByIdProps } from "../dtos/soundDTOs";

export class SoundUseCase {

  async create(data: CreateSoundProps): Promise<Sound> {

    const repositories = new SoundRepository()
    const soundCreated = await repositories.createSound(data)

    return soundCreated
  }

  async update(props: UpdateSoundProps): Promise<Sound> {

    const repositories = new SoundRepository()
    const updated = await repositories.updateSound(props)
    return updated
  }

  async delete(id: DeleteSoundProps): Promise<Sound> {

    const repositories = new SoundRepository()
    const soundDeleted = await repositories.deleteSound(id)

    return soundDeleted
  }

  async getSoundByPetId(petId: GetSoundByPetIdProps): Promise<Sound[]> {

    const repositories = new SoundRepository()
    const soundFound = await repositories.findSoundByPetId(petId)

    if (!soundFound) {

      throw new AppError("Not found", 404)
    }

    return soundFound
  }

  async getSoundById(id: GetSoundByIdProps): Promise<Sound> {

    const repositories = new SoundRepository()
    const soundFound = await repositories.findSoundById(id)

    if (!soundFound) {

      throw new AppError("Not found", 404)
    }
    return soundFound
  }

}