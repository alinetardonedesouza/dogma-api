import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { AcelerometerUseCase } from "../useCases/acelerometerUseCase";

export class AcelerometerController {
    async create(req: Request, res: Response) {

        const { petId, value } = req.body;

        if (!petId || !value ) {
            throw new Error("Paramêtros inválidos")
        }

        const acelerometerUseCases = new AcelerometerUseCase();

        const result = await acelerometerUseCases.create({
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

        const acelerometerUseCases = new AcelerometerUseCase()

        const result = await acelerometerUseCases.update({ id, data })

        return res.status(200).json(result)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const acelerometerUseCases = new AcelerometerUseCase()

        const result = await acelerometerUseCases.delete({ id })

        return res.status(200).json(result)
    }

    async getAcelerometerByPetId(req: Request, res: Response) {

        const { petId } = req.params;

        if (!petId) {
            throw new Error("Paramêtros inválidos")
        }

        const acelerometerUseCases = new AcelerometerUseCase();

        const result = await acelerometerUseCases.getAcelerometerByPetId({ petId });

        return res.status(200).json(result);
    }

    async getAcelerometerById(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const acelerometerUseCases = new AcelerometerUseCase();

        const result = await acelerometerUseCases.getAcelerometerById({ id });

        return res.status(200).json(result);
    }

}