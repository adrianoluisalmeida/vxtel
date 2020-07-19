import IPlansRepository from '@modules/plans/repositories/IPlansRepository';

import plans from '../data/plans.json';

interface IPlan {
  id: number;
  name: string;
  duration: number;
}

class PlansRepository implements IPlansRepository {
  public async findAllPlans(): Promise<IPlan[] | undefined> {
    return plans;
  }

  public async findById(id: number): Promise<IPlan> {
    return plans.find(plan => plan.id === id);
  }
}

export default PlansRepository;
