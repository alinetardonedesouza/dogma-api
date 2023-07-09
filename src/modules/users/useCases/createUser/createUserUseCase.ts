import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { AppError } from "../../../../errors/AppError";
import { createUser, deleteUser, findUser } from "../../repositories/user.repository"

export class CreateUserUseCase {
    async execute({ name, email }: CreateUserDTO): Promise<User> {

        const userAlreadyExists = await findUser(email as string)

        if (userAlreadyExists) {
            
            throw new AppError("User already exists")
        }
        
        const userCreated = await createUser(name as string, email as string)

        return userCreated
    }
}