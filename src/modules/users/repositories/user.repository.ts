import { prisma } from "../../../database/prisma/client";
import { User } from "@prisma/client";

export async function createUser(name: string, email: string, password: string): Promise<User> {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password
    }
  });

  return user;
}

export async function updateUser(id: string, data: JSON): Promise<User> {
  const updateUser = await prisma.user.update({
    where: {
      id,
    },
    data,
  })

  return updateUser
}

export async function deleteUser(userId: string): Promise<User> {
  const user = await prisma.user.delete({
    where: {
      id: userId
    }
  });

  return user;
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  return user;
}

export async function findUserById(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  });

  return user;
}

export async function findAllUsers(): Promise<User[] | null> {
  const users = await prisma.user.findMany();
  return users.length > 0 ? users : null;
}