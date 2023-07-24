import { Router } from "express";
import { UserController } from "../modules/users/controller/userController";

const createUserController = new UserController();
const userRoutes = Router();

userRoutes.post("/", createUserController.create)
userRoutes.get("/watch/:id", createUserController.create)

export {userRoutes};