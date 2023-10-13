import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { GPSUseCase } from "../useCases/gpsUseCase";

export class GPSController {
    async create(req: Request, res: Response) {

        const {
            collarId,
            latitude,
            longitude } = req.body;

        if (!collarId || !latitude || !longitude) {
            throw new Error("Paramêtros inválidos")
        }

        const GpsUseCases = new GPSUseCase();

        const result = await GpsUseCases.create({
            collarId,
            latitude,
            longitude
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

    async getGPSByUserId(req: Request, res: Response) {

        const { userId } = req.params;

        if (!userId) {
            throw new Error("Paramêtros inválidos")
        }

        const GpsUseCases = new GPSUseCase();

        const result = await GpsUseCases.getGPSByUserId(userId);

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