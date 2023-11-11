import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { CollarUseCase } from "../useCases/collarUseCase";

export class CollarController {

    async create(req: Request, res: Response) {

        const { petId, token } = req.body

        if (!petId || !token) {
            throw new Error("Paramêtros inválidos. PetId faltando.")
        }

        const collarUseCases = new CollarUseCase();
        const result = await collarUseCases.create(petId,token);

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

    async getCollarByPetId(req: Request, res: Response) {

        const { petId } = req.params;

        if (!petId) {
            throw new Error("Paramêtros inválidos")
        }

        const collarUseCases = new CollarUseCase();
        const result = await collarUseCases.getCollarByPetId(petId);

        return res.status(200).json(result);
    }

    async getCollarByToken(req: Request, res: Response) {

        const { token } = req.params;

        if (!token) {
            throw new Error("Paramêtros inválidos")
        }

        const collarUseCases = new CollarUseCase();
        const result = await collarUseCases.getCollarByToken(token);

        return res.status(200).json(result);
    }
}