import IGetCallPriceDTO from '../infra/dtos/IGetCallPriceDTO';

interface ICall {
  id: number;
  origin: string;
  destiny: string;
  minutePrice: number;
}

export default interface ICallsRepository {
  getCallPrice(data: IGetCallPriceDTO): Promise<ICall | void>;
}
