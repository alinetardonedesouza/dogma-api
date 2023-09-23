import { Router } from "express";
import { userRoutes } from "../modules/users/routes/user.routes";
import { petsRoutes } from "../modules/pets/routes/pets.routes";
import { stressRoutes } from "../modules/stress/routes/stress.routes";

const routes = Router();

routes.use("/users", userRoutes)
routes.use("/pets", petsRoutes)
routes.use("/stress", stressRoutes)

export { routes };