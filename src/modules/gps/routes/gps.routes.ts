import { Router } from "express";
import { GPSController } from "../controller/gpsController";

const gpsController = new GPSController();
const gpsRoutes = Router();

gpsRoutes.route("/")
  .post(gpsController.create)

gpsRoutes.route("/:id")
  .put(gpsController.update)
  .delete(gpsController.delete)
  .get(gpsController.getGPSById)

gpsRoutes.route("/user/:userId")
  .get(gpsController.getGPSByUserId)

gpsRoutes.route("/collar/:token")
  .get(gpsController.getGPSByToken)

  
export { gpsRoutes };