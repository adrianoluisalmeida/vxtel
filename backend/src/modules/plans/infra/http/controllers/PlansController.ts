import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AllPlansService from '@modules/plans/services/AllPlansService';

export default class PlansController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const allPlansService = container.resolve(AllPlansService);
      const plans = await allPlansService.execute();

      return response.send(plans);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
