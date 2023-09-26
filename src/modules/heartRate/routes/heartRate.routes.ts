import { Router } from "express";
import { HeartRateController } from "../controller/heartRateController";

const heartRateController = new HeartRateController();
const heartRateRoutes = Router();

heartRateRoutes.route("/")
  .post(heartRateController.create)

heartRateRoutes.route("/:id")
  .put(heartRateController.update)
  .delete(heartRateController.delete)
  .get(heartRateController.getHeartRateById)

heartRateRoutes.route("/:petId")
  .get(heartRateController.getHeartRateByPetId)

  
export { heartRateRoutes };