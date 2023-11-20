import { prisma } from "../../../database/prisma/client";
import { Collar, Sound } from "@prisma/client";
import { CreateSoundProps, DeleteSoundProps, GetSoundByIdProps, GetSoundByTokenProps, UpdateSoundProps } from "../dtos/soundDTOs";
import { addHours, subHours } from 'date-fns'; // Você pode usar uma biblioteca de manipulação de datas, como date-fns

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

  // async findSoundByToken(token: string): Promise<Sound[] | null> {
  //   const collar = await prisma.collar.findMany({
  //     where: { token },
  //     include: {
  //       sound: true,
  //     },
  //   });

  //   return collar.length > 0 ? collar[0].sound : null;
  // }


  async findSoundByToken(token: string): Promise<Sound[] | null> {
    const now = new Date();
    const oneHourAgo = subHours(now, 1);
    console.log(oneHourAgo)
    console.log(now)

    const collar = await prisma.collar.findMany({
      where: {
        token,
      },
      include: {
        sound: {
          where: {
            value: {
              gt: 170,
            },
            created_at: {
              gte: oneHourAgo,
              lte: now,
            },
          },
        },
      },
    });

    return collar.length > 0 ? collar[0].sound : null;
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
