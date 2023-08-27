import { PetsRepository } from '../../repository/petsRepository';
import { CreatePetsService } from '../createPetsService';

export const makePetsLogs = () => {
	const petsRepository = new PetsRepository();
	return new CreatePetsService(petsRepository);
};
