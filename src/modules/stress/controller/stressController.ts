import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { StressUseCase } from "../useCases/stressUseCase";

export class StressController {
    async create(req: Request, res: Response) {

        const { collarId, soundId, acelerometerId, heartRateId, totalValue } = req.body;

        if (!collarId || !soundId || !acelerometerId || !heartRateId || !totalValue) {
            throw new Error("Paramêtros inválidos")
        }

        const stressUseCases = new StressUseCase();

        const result = await stressUseCases.create({ collarId, soundId, acelerometerId, heartRateId, totalValue });

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

    async getStressByCollarId(req: Request, res: Response) {

        const { collarId } = req.params;

        if (!collarId) {
            throw new Error("Paramêtros inválidos")
        }

        const stressUseCases = new StressUseCase();

        const result = await stressUseCases.getStressByCollarId({collarId});

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