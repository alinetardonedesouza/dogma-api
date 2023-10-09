import { Router } from "express";
import { CollarController } from "../controller/collarController";

const collarController = new CollarController();
const collarRoutes = Router();

collarRoutes.route("/")
  .post(collarController.create)

collarRoutes.route("/:id")
  .delete(collarController.delete)
  .get(collarController.getCollarById)

collarRoutes.route("/collar/:collarId")
  .get(collarController.getCollarByPetId)
  
export { collarRoutes };