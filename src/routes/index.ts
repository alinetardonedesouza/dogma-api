import { Router } from "express";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes)
routes.use("/pets", petsRoutes)

export { routes };