import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { CollarUseCase } from "../useCases/collarUseCase";

export class CollarController {

    async create(req: Request, res: Response) {

        const collarUseCases = new CollarUseCase();
        const result = await collarUseCases.create();

        return res.status(201).json(result);
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const collarUseCases = new CollarUseCase();
        const result = await collarUseCases.delete({ id })

        return res.status(200).json(result)
    }

    async getCollarById(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const collarUseCases = new CollarUseCase();
        const result = await collarUseCases.getCollarById({ id });

        return res.status(200).json(result);
    }
}