import { PetsRepository } from '../../repository/petsRepository';
import { GetPetsByUserIdService } from '../GetByUserIdService';

export const makeGetByUserIdAccessLogs = () => {
	const petsRepository = new PetsRepository();
	return new GetPetsByUserIdService(petsRepository);
};
