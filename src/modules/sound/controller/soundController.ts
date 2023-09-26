import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { SoundUseCase } from "../useCases/soundUseCase";

export class SoundController {
    async create(req: Request, res: Response) {

        const { petId, value } = req.body;

        if (!petId || !value ) {
            throw new Error("Paramêtros inválidos")
        }

        const soundUseCases = new SoundUseCase();

        const result = await soundUseCases.create({
            petId,
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

        const soundUseCases = new SoundUseCase()

        const result = await soundUseCases.update({ id, data })

        return res.status(200).json(result)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const soundUseCases = new SoundUseCase()

        const result = await soundUseCases.delete({ id })

        return res.status(200).json(result)
    }

    async getSoundByPetId(req: Request, res: Response) {

        const { petId } = req.params;

        if (!petId) {
            throw new Error("Paramêtros inválidos")
        }

        const soundUseCases = new SoundUseCase();

        const result = await soundUseCases.getSoundByPetId({ petId });

        return res.status(200).json(result);
    }

    async getSoundById(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const soundUseCases = new SoundUseCase();

        const result = await soundUseCases.getSoundById({ id });

        return res.status(200).json(result);
    }

}