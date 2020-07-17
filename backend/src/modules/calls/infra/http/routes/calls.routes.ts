// Libs
import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import CallsController from '../controllers/CallsController';

const callsController = new CallsController();

const callsRouter = Router();

callsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      plan_id: Joi.number().required(),
      origin: Joi.string().required(),
      destiny: Joi.string().required(),
      minutes: Joi.number().required(),
    },
  }),
  callsController.create,
);

export default callsRouter;
