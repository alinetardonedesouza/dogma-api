import { Pet } from '@prisma/client';
import type * as T from './interface';

export abstract class AbstractPetsRepository {
	abstract create(user: T.CreatePetProps): Promise<void>;
	abstract findAll(): Promise<Pet[]>;
	abstract findByUserId(user_id: string): Promise<Pet[]>;
}
