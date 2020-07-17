import { Router } from 'express';

import PlansController from '../controllers/PlansController';

const plansController = new PlansController();

const callsRouter = Router();
callsRouter.get('/', plansController.index);

export default callsRouter;
