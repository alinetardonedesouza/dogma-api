import { Pet } from '@prisma/client';
import { AbstractPetsRepository } from './abstractPetsRepository';
import type * as T from './interface';
import { prisma } from '../../../prisma/client';

export class PetsRepository implements AbstractPetsRepository {
	async create(log: T.CreatePetProps): Promise<void> {
		await prisma.pet.create({
			data: {
				user_id: log.user_id,
				device: log.device,
			},
		});
	}

	async findAll(): Promise<Pet[]> {
		const logs = await prisma.pet.findMany({
			where: {},
			select: {
				id: true,
				user_id: true,
				device: true,
				log_at: true,
			},
		});
		return logs;
	}

	async findByUserId(user_id: string): Promise<Pet[]> {
		const logs = await prisma.pet.findMany({
			where: {
				user_id: user_id,
			},
		});
		return logs;
	}
}
