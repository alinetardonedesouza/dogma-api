import { User } from "@prisma/client";
import { CreateUserDTO } from "../dtos/createUserDTO";
import { GetUserDTO } from "../dtos/getUserDTO";
import { AppError } from "../../../errors/AppError";
import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById } from "../repositories/user.repository"

export class UsersUseCase {
    async create({ name, email, password }: CreateUserDTO): Promise<User> {

        const userAlreadyExists = await findUserByEmail(email as string)

        if (userAlreadyExists) {
            
            throw new AppError("User already exists")
        }
        
        const userCreated = await createUser(name as string, email as string, password as string)

        return userCreated
    }

    async getUserById({ id }: GetUserDTO): Promise<User> {

        const userFinded = await findUserById(id as string)

        if (!userFinded) {
            
            throw new AppError("User not found")
        }

        return userFinded
    }

    async getAllUsers(): Promise<User[]> {

        const usersFinded = await findAllUsers()

        if (!usersFinded) {
            
            throw new AppError("Users not found")
        }

        return usersFinded
    }
}