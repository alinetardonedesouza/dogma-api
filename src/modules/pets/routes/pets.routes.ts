import { Router } from "express";
import { PetsController } from "../controller/petsController";

const petController = new PetsController();
const petsRoutes = Router();

petsRoutes.route("/")
  .post(petController.create)

petsRoutes.route("/:id")
  .put(petController.update)
  .delete(petController.delete)
  .get(petController.getPetsById)

petsRoutes.route("/:userId")
  .get(petController.getPetsByUserId)

petsRoutes.route("/:collarId")
  .get(petController.getPetsByCollarId)

export { petsRoutes };