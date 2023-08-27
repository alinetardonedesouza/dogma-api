import { Router } from 'express';
import * as controllers from '../controllers';

const createPetsController = new controllers.CreatePetsController();
const getAccessLogsController = new controllers.GetPetsController();
const getAccessLogsByUserIdController = new controllers.GetPetsByUserIdController();

const accessLogsRouter = Router();

accessLogsRouter.post('/', createPetsController.handle);
accessLogsRouter.get('/', getAccessLogsController.handle);
accessLogsRouter.get('/:user_id', getAccessLogsByUserIdController.handle);

export default accessLogsRouter;
