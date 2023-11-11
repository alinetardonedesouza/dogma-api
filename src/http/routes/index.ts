import { Request, Response, Router } from "express";
import { userRoutes } from "../../modules/users/routes/user.routes";
import { petsRoutes } from "../../modules/pets/routes/pets.routes";
import { stressRoutes } from "../../modules/stress/routes/stress.routes";
import { collarRoutes } from "../../modules/collar/routes/collar.routes"
import { gpsRoutes } from "../../modules/gps/routes/gps.routes";
import { soundRoutes } from "../../modules/sound/routes/sound.routes";
import { acelerometerRoutes } from "../../modules/acelerometer/routes/acelerometer.routes";
import { heartRateRoutes } from "../../modules/heartRate/routes/heartRate.routes";
import swaggerDocument from "../../docs/swagger.json"

import swaggerUi from 'swagger-ui-express';

const routes = Router();

routes.use("/users", userRoutes)
routes.use("/pets", petsRoutes)
// routes.use("/stress", stressRoutes)
routes.use("/collar", collarRoutes)
routes.use("/gps", gpsRoutes)
routes.use("/sound", soundRoutes)
routes.use("/acelerometer", acelerometerRoutes)
// routes.use("/heart-rate", heartRateRoutes)

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get('/', (_req: Request, res: Response) => {
  return res.status(301).redirect('/api-docs');
});

routes.all('*', (request: Request, response: Response) => {
  response.status(404).send(`<h1>This route ${request.url} does not exist</h1>`);
});

export { routes };