import { injectable, inject } from 'tsyringe';

import IPlansRepository from '../repositories/IPlansRepository';

interface IPlan {
  id: number;
  name: string;
  durantion: number;
}

@injectable()
class AllPlansService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute(): Promise<IPlan[] | void> {
    const plans = await this.plansRepository.findAllPlans();
    return plans;
  }
}

export default AllPlansService;
