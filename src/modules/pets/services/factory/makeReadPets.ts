import { PetsRepository } from '../../repository/petsRepository';
import { GetPetsService } from '../GetPetsService';

export const makeGetPets = () => {
	const petsRepository = new PetsRepository();
	return new GetPetsService(petsRepository);
};
