import { Request, Response } from 'express';
import { makeGetByUserIdAccessLogs } from '../services/factory/makeReadByUserId';

export class GetPetsByUserIdController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { user_id } = request.params;

		const service = makeGetByUserIdAccessLogs();
		const petsByUser = await service.execute({ user_id });

		return response.status(200).json(petsByUser);
	}
}
