import { Router } from "express";
import { StressController } from "../controller/stressController";

const stressController = new StressController();
const stressRoutes = Router();

stressRoutes.route("/")
  .post(stressController.create)

stressRoutes.route("/:id")
  .put(stressController.update)
  .delete(stressController.delete)
  .get(stressController.getStressById)

stressRoutes.route("/:collarId")
  .get(stressController.getStressByCollarId)

  
export { stressRoutes };