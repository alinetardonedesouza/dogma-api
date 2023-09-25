import { Router } from "express";
import { GPSController } from "../controller/stressController";

const gpsController = new GPSController();
const gpsRoutes = Router();

gpsRoutes.route("/")
  .post(gpsController.create)

gpsRoutes.route("/:id")
  .put(gpsController.update)
  .delete(gpsController.delete)
  .get(gpsController.getGPSById)

gpsRoutes.route("/:petId")
  .get(gpsController.getGPSByPetId)

  
export { gpsRoutes };