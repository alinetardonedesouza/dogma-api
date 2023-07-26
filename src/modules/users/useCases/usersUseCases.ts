import { User } from "@prisma/client";
import { CreateUserDTO } from "../dtos/createUserDTO";
import { GetUserDTO } from "../dtos/getUserDTO";
import { AppError } from "../../../errors/AppError";
import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById, updateUser } from "../repositories/user.repository"
import { UpdateUserDTO } from "../dtos/updateUserDTO";
import { DeleteUserDTO } from "../dtos/deleteUserDTO";
import { logger } from "../../../../shared/utils/logger";

export class UsersUseCase {
    async create({ name, email, password }: CreateUserDTO): Promise<User> {

        const userAlreadyExists = await findUserByEmail(email as string)

        if (userAlreadyExists) {

            throw new AppError("User already exists")
        }

        const userCreated = await createUser(name as string, email as string, password as string)

        return userCreated
    }

    async update({ id, data }: UpdateUserDTO): Promise<User> {

        const userFound = await findUserById(id as string)

        if (!userFound) {

            throw new AppError("User not found")
        }

        const userUpdated = await updateUser(id as string, data as JSON)

        return userUpdated
    }

    async delete({ id }: DeleteUserDTO): Promise<User> {

        const userFound = await findUserById(id as string)

        if (!userFound) {

            throw new AppError("User not found")
        }

        const userDeleted = await deleteUser(id as string)

        return userDeleted
    }

    async getUserById({ id }: GetUserDTO): Promise<User> {

        const userFound = await findUserById(id as string)

        if (!userFound) {

            throw new AppError("User not found")
        }

        return userFound
    }

    async getAllUsers(): Promise<User[]> {

        const usersFinded = await findAllUsers()

        if (!usersFinded) {

            throw new AppError("Users not found")
        }

        return usersFinded
    }
}