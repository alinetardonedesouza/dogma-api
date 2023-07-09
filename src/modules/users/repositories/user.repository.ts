import { prisma } from "../../../prisma/client";
import { User } from "@prisma/client";

async function createUser(name: string, email: string): Promise<User> {
    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    });

    return user;
}

async function deleteUser(userId: string): Promise<User> {
    const user = await prisma.user.delete({
        where: {
          id: userId
        }
      });

      return user;
}

async function findUser(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
        where: {
          email
        }
      });
    
      return user;
}

export { createUser, deleteUser, findUser }