import { Router } from 'express';
import callsRouter from '@modules/calls/infra/http/routes/calls.routes';
import plansRouter from '@modules/plans/infra/http/routes/plans.routes';

const routes = Router();

routes.use('/calls', callsRouter);
routes.use('/plans', plansRouter);

export default routes;
