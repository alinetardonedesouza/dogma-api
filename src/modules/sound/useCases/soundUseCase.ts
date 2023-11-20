import { Collar, Sound } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { logger } from "../../../utils/logger";
import { SoundRepository } from "../repositories/sound.repository";
import { CreateSoundProps, UpdateSoundProps, DeleteSoundProps, GetSoundByIdProps, GetSoundByTokenProps } from "../dtos/soundDTOs";

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

  async getSoundByToken(token: string): Promise<Sound[]> {

    const repositories = new SoundRepository()
    const soundFound = await repositories.findSoundByToken(token)

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