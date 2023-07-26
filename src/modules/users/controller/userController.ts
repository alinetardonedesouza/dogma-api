import { Request, Response } from "express";
import { UsersUseCase } from "../useCases/usersUseCases";
import { logger } from "../../../../shared/utils/logger";

export class UserController {
    async create(req: Request, res: Response) {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new Error("Invalid params")
        }

        const userUseCases = new UsersUseCase();

        const result = await userUseCases.create({ name, email, password });

        return res.status(201).json(result);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { data } = req.body;

        if (!id) {
            throw new Error("Invalid params")
        }

        const userUseCases = new UsersUseCase()

        const result = await userUseCases.update({ id, data })

        return res.status(200).json(result)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Invalid params")
        }

        const userUseCases = new UsersUseCase()

        const result = await userUseCases.delete({ id })

        return res.status(200).json(result)
    }

    async getUser(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Invalid params")
        }

        const userUseCases = new UsersUseCase();

        const result = await userUseCases.getUserById({ id });

        return res.status(200).json(result);
    }

    async getAllUsers(req: Request, res: Response) {

        const userUseCases = new UsersUseCase()

        const result = await userUseCases.getAllUsers()

        return res.status(200).json(result)
    }
}