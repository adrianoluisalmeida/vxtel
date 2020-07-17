import CallsRepository from '@modules/calls/infra/database/repositories/CallsRepository';
import PlansRepository from '@modules/plans/infra/database/repositories/PlansRepository';

import AppError from '@shared/errors/AppError';
import GetCallPriceService from './GetCallPriceService';

let plansRepository: PlansRepository;
let callsRepository: CallsRepository;

let getCallPrice: GetCallPriceService;

describe('GetCallPriceService', () => {
  beforeEach(() => {
    plansRepository = new PlansRepository();
    callsRepository = new CallsRepository();

    getCallPrice = new GetCallPriceService(callsRepository, plansRepository);
  });

  it('should be able get call price', async () => {
    const costCallPrice = await getCallPrice.execute({
      plan_id: 3,
      origin: '018',
      destiny: '011',
      minutes: 200,
    });

    expect(costCallPrice.more_economically).toBe(167.2);
    expect(costCallPrice.no_more_economically).toBe(380);
  });

  it('should not be able get call price with invalid origin or destiny', async () => {
    await expect(
      getCallPrice.execute({
        plan_id: 3,
        origin: '012',
        destiny: '011',
        minutes: 200,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able get call price with invalid plan_id', async () => {
    await expect(
      getCallPrice.execute({
        plan_id: 20,
        origin: '018',
        destiny: '011',
        minutes: 200,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
