import { Request, Response } from 'express';
import { makeGetPets } from '../services/factory/makeReadPets';

export class GetPetsController {
	async handle(request: Request, response: Response): Promise<Response> {
		const service = makeGetPets();
		const pets = await service.execute();

		return response.status(200).json(pets);
	}
}
