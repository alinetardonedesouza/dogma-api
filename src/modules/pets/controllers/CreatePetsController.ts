import { Request, Response } from 'express';
import { makePetsLogs } from '../services/factory/makeCreatePets';

export class CreatePetsController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { user_id, device } = request.body;

		const service = makePetsLogs();
		await service.execute({ user_id, device });

		return response.sendStatus(201);
	}
}
