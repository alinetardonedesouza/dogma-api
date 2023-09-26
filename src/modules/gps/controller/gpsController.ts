import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { GPSUseCase } from "../useCases/gpsUseCase";

export class GPSController {
    async create(req: Request, res: Response) {

        const {
            petId,
            latitude,
            longitude,
            locale } = req.body;

        if (!petId || !latitude || !longitude || !locale) {
            throw new Error("Paramêtros inválidos")
        }

        const GpsUseCases = new GPSUseCase();

        const result = await GpsUseCases.create({
            petId,
            latitude,
            longitude,
            locale
        });

        return res.status(201).json(result);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { data } = req.body;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const GpsUseCases = new GPSUseCase()

        const result = await GpsUseCases.update({ id, data })

        return res.status(200).json(result)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const GpsUseCases = new GPSUseCase()

        const result = await GpsUseCases.delete({ id })

        return res.status(200).json(result)
    }

    async getGPSByPetId(req: Request, res: Response) {

        const { petId } = req.params;

        if (!petId) {
            throw new Error("Paramêtros inválidos")
        }

        const GpsUseCases = new GPSUseCase();

        const result = await GpsUseCases.getGPSByPetId({ petId });

        return res.status(200).json(result);
    }

    async getGPSById(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Paramêtros inválidos")
        }

        const GpsUseCases = new GPSUseCase();

        const result = await GpsUseCases.getGPSById({ id });

        return res.status(200).json(result);
    }

}