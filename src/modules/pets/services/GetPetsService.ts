import { AbstractPetsRepository } from '../repository/abstractPetsRepository';

export class GetPetsService {
	constructor(private readonly petsRepository: AbstractPetsRepository) {}

	async execute() {
		return await this.petsRepository.findAll();
	}
}
