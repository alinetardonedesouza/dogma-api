import { Router } from "express";
import { SoundController } from "../controller/soundController";

const soundController = new SoundController();
const soundRoutes = Router();

soundRoutes.route("/")
  .post(soundController.create)

soundRoutes.route("/:id")
  .put(soundController.update)
  .delete(soundController.delete)
  .get(soundController.getSoundById)

soundRoutes.route("/:collarId")
  .get(soundController.getSoundByCollarId)

  
export { soundRoutes };