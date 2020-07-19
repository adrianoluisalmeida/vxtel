import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPlansRepository from '@modules/plans/repositories/IPlansRepository';
import ICallsRepository from '../repositories/ICallsRepository';

interface IRequest {
  plan_id: number;
  origin: string;
  destiny: string;
  minutes: number;
}

interface IResponse {
  more_economically: number;
  no_more_economically: number;
}

@injectable()
class GetCallPriceService {
  constructor(
    @inject('CallsRepository')
    private callsRepository: ICallsRepository,

    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute({
    plan_id,
    origin,
    destiny,
    minutes,
  }: IRequest): Promise<IResponse> {
    const call = await this.callsRepository.getCallPrice({
      origin,
      destiny,
    });

    if (!call) {
      throw new AppError('Verique a origem e o destino da chamada.');
    }

    const plan = await this.plansRepository.findById(plan_id);

    if (!plan) {
      throw new AppError('Plano não encontrado');
    }

    let tax = 1;
    let additional = 0;

    if (minutes >= plan.duration) {
      additional = minutes - plan.duration;
      tax = 1.1;
    }

    const more_economically = additional * (call.minutePrice * tax);
    const no_more_economically = minutes * call.minutePrice;

    return {
      more_economically,
      no_more_economically,
    };
  }
}

export default GetCallPriceService;
