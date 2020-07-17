import ICallsRepository from '@modules/calls/repositories/ICallsRepository';
import IGetCallPriceDTO from '@modules/calls/infra/dtos/IGetCallPriceDTO';

import calls from '../data/calls.json';

interface ICall {
  id: number;
  origin: string;
  destiny: string;
  minutePrice: number;
}

class CallsRepository implements ICallsRepository {
  async getCallPrice(data: IGetCallPriceDTO): Promise<ICall | void> {
    const { origin, destiny } = data;

    const callFilter = await calls.find(
      call => call.origin === origin && call.destiny === destiny,
    );

    return callFilter;
  }
}

export default CallsRepository;
