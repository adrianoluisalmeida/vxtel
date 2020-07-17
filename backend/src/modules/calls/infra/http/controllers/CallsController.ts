import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetCallPriceService from '@modules/calls/services/GetCallPriceService';

export default class CallsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { plan_id, origin, destiny, minutes } = request.body;

      const callPrice = container.resolve(GetCallPriceService);

      const price = await callPrice.execute({
        plan_id,
        origin,
        destiny,
        minutes,
      });

      return response.send(price);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
