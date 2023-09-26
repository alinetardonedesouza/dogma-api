import { Router } from "express";
import { userRoutes } from "../../modules/users/routes/user.routes";
import { petsRoutes } from "../../modules/pets/routes/pets.routes";
import { stressRoutes } from "../../modules/stress/routes/stress.routes";
import { collarRoutes } from "../../modules/collar/routes/collar.routes"
import { gpsRoutes } from "../../modules/gps/routes/gps.routes";
import { soundRoutes } from "../../modules/sound/routes/sound.routes";
import { acelerometerRoutes } from "../../modules/acelerometer/routes/acelerometer.routes";

const routes = Router();

routes.use("/users", userRoutes)
routes.use("/pets", petsRoutes)
routes.use("/stress", stressRoutes)
routes.use("/collar", collarRoutes)
routes.use("/gps", gpsRoutes)
routes.use("/sound", soundRoutes)
routes.use("/acelerometer", acelerometerRoutes)

export { routes };