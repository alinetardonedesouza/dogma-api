import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase {
    async execute({ name, email }: CreateUserDTO): Promise<User> {
        //Verificar se o usuario já existe

        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        //Se sim, retorna erro
        if (userAlreadyExists) {

            throw new AppError("User already exists")
        }

        //Senão, cria usuario
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return user
    }
}