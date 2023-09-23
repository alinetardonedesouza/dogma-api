import { Router } from "express";
import { UserController } from "../controller/userController";

const createUserController = new UserController();
const userRoutes = Router();

userRoutes.route("/")
  .post(createUserController.create)
  .get(createUserController.getAllUsers)

userRoutes.route("/:id")
  .get(createUserController.getUser)
  .put(createUserController.update)
  .delete(createUserController.delete)

export { userRoutes };