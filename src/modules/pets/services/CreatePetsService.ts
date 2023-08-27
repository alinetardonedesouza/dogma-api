import Joi from 'joi';
import { CreatePetsDto } from '../controllers/dto/createPetsDTO';
import { AbstractPetsRepository } from '../repository/abstractPetsRepository';

type CreatePetsProps = CreatePetsDto;

const createPetSchema = Joi.object<CreatePetsProps>({
	user_id: Joi.string().uuid().required(),
	device: Joi.string().required(),
});
export class CreatePetsService {
	constructor(private readonly petsRepository: AbstractPetsRepository) {}

	async execute(props: CreatePetsProps) {
		const { user_id, device } = await createPetSchema.validateAsync(props);

		await this.petsRepository.create({
			user_id,
			device,
		});
	}
}
