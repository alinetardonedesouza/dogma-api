import { Router } from "express";
import { AcelerometerController } from "../controller/acelerometerController";

const acelerometerController = new AcelerometerController();
const acelerometerRoutes = Router();

acelerometerRoutes.route("/")
  .post(acelerometerController.create)

acelerometerRoutes.route("/:id")
  .put(acelerometerController.update)
  .delete(acelerometerController.delete)
  .get(acelerometerController.getAcelerometerById)

acelerometerRoutes.route("/:collarId")
  .get(acelerometerController.getAcelerometerByCollarId)

  
export { acelerometerRoutes };