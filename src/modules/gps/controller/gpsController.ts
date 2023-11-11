import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { GPSUseCase } from "../useCases/gpsUseCase";
import { CollarUseCase } from "../../collar/useCases/collarUseCase";

export class GPSController {
    async create(req: Request, res: Response) {

        const {
            token,
            latitude,
            longitude } = req.body;

        if (!token || !latitude || !longitude) {
            throw new Error("Paramêtros inválidos")
        }

        const CollarUseCases = new CollarUseCase()
        const collar = await CollarUseCases.getCollarByToken(token)

        const GpsUseCases = new GPSUseCase();

        const result = await GpsUseCases.create({
            collarId: collar.id,
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

    async getGPSByToken(req: Request, res: Response) {

        const { token } = req.params;

        if (!token) {
            throw new Error("Paramêtros inválidos")
        }

        const GpsUseCases = new GPSUseCase();

        const result = await GpsUseCases.getGPSByToken(token);

        return res.status(200).json(result);
    }

}