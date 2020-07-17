import { container } from 'tsyringe';

import ICallsRepository from '@modules/calls/repositories/ICallsRepository';
import CallsRepository from '@modules/calls/infra/database/repositories/CallsRepository';

import IPlansRepository from '@modules/plans/repositories/IPlansRepository';
import PlansRepository from '@modules/plans/infra/database/repositories/PlansRepository';

container.registerSingleton<IPlansRepository>(
  'PlansRepository',
  PlansRepository,
);

container.registerSingleton<ICallsRepository>(
  'CallsRepository',
  CallsRepository,
);
