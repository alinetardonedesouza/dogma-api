import Joi from 'joi';
import { GetPetsByUserIdDto } from '../controllers/dto/getByUserIdDTO';
import { AbstractPetsRepository } from '../repository/abstractPetsRepository';

type GetPetsProps = GetPetsByUserIdDto;

const createLogSchema = Joi.object<GetPetsProps>({
	user_id: Joi.string().uuid().required(),
});
export class GetPetsByUserIdService {
	constructor(private readonly petsRepository: AbstractPetsRepository) {}

	async execute(props: GetPetsProps) {
		const { user_id } = await createLogSchema.validateAsync(props);

		const petsCreated = await this.petsRepository.findByUserId(user_id);

		return petsCreated;
	}
}
