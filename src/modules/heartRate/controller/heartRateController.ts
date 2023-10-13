import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { HeartRateUseCase } from "../useCases/heartRateUseCase";

export class HeartRateController {
    async create(req: Request, res: Response) {

        const { collarId, value } = req.body;

        if (!collarId || !value ) {
            throw new Error("Paramêtros inválidos")
        }

        const heartRateUseCases = new HeartRateUseCase();

        const result = await heartRateUseCases.create({
            collarId,
            value
        });

        return res.status(201).json(result);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { data } = req.body;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const heartRateUseCases = new HeartRateUseCase()

        const result = await heartRateUseCases.update({ id, data })

        return res.status(200).json(result)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const heartRateUseCases = new HeartRateUseCase()

        const result = await heartRateUseCases.delete({ id })

        return res.status(200).json(result)
    }

    async getHeartRateByCollarId(req: Request, res: Response) {

        const { collarId } = req.params;

        if (!collarId) {
            throw new Error("Paramêtros inválidos")
        }

        const heartRateUseCases = new HeartRateUseCase();

        const result = await heartRateUseCases.getHeartRateByCollarId({ collarId });

        return res.status(200).json(result);
    }

    async getHeartRateById(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const heartRateUseCases = new HeartRateUseCase();

        const result = await heartRateUseCases.getHeartRateById({ id });

        return res.status(200).json(result);
    }

}