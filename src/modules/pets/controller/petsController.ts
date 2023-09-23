import { Request, Response } from "express";
import { logger } from "../../../../shared/utils/logger";
import { PetsUseCase } from "../useCases/petsUseCase";

export class PetsController {
    async create(req: Request, res: Response) {

        const { userId, name, age, breed, sex, collarId } = req.body;

        if (!userId || !name || !age || !breed || !sex || !collarId) {
            throw new Error("Paramêtros inválidos")
        }

        const petsUseCases = new PetsUseCase();

        const result = await petsUseCases.create({ userId, name, age, breed, sex, collarId });

        return res.status(201).json(result);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { data } = req.body;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const petsUseCases = new PetsUseCase()

        const result = await petsUseCases.update({ id, data })

        return res.status(200).json(result)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const petsUseCases = new PetsUseCase()

        const result = await petsUseCases.delete({ id })

        return res.status(200).json(result)
    }

    async getPetsById(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const petsUseCases = new PetsUseCase();

        const result = await petsUseCases.getPetsById({ id });

        return res.status(200).json(result);
    }

    async getPetsByUserId(req: Request, res: Response) {

        const { userId } = req.params;

        if (!userId) {
            throw new Error("Paramêtros inválidos")
        }

        const petsUseCases = new PetsUseCase();

        const result = await petsUseCases.getPetsByUserId({ userId });

        return res.status(200).json(result);
    }

    async getPetsByCollarId(req: Request, res: Response) {

        const { collarId } = req.params;

        if (!collarId) {
            throw new Error("Paramêtros inválidos")
        }

        const petsUseCases = new PetsUseCase();

        const result = await petsUseCases.getPetsByCollarId({ collarId });

        return res.status(200).json(result);
    }

}