import { Request, Response } from "express";
import { logger } from "../../../../shared/utils/logger";
import { StressUseCase } from "../useCases/stressUseCase";

export class StressController {
    async create(req: Request, res: Response) {

        const { petId, soundId, acelerometerId, heartRateId, totalValue } = req.body;

        if (!petId || !soundId || !acelerometerId || !heartRateId || !totalValue) {
            throw new Error("Paramêtros inválidos")
        }

        const stressUseCases = new StressUseCase();

        const result = await stressUseCases.create({ petId, soundId, acelerometerId, heartRateId, totalValue });

        return res.status(201).json(result);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { data } = req.body;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const stressUseCases = new StressUseCase()

        const result = await stressUseCases.update({ id, data })

        return res.status(200).json(result)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const stressUseCases = new StressUseCase()

        const result = await stressUseCases.delete({id})

        return res.status(200).json(result)
    }

    async getStressByPetId(req: Request, res: Response) {

        const { petId } = req.params;

        if (!petId) {
            throw new Error("Paramêtros inválidos")
        }

        const stressUseCases = new StressUseCase();

        const result = await stressUseCases.getStressByPetId({petId});

        return res.status(200).json(result);
    }

    async getStressById(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const stressUseCases = new StressUseCase();

        const result = await stressUseCases.getStressById({id});

        return res.status(200).json(result);
    }

}