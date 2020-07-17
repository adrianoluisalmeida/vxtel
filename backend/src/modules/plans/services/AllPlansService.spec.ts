import PlansRepository from '@modules/plans/infra/database/repositories/PlansRepository';
import AllPlansService from './AllPlansService';

let plansRepository: PlansRepository;
let allPlans: AllPlansService;

describe('AllPlansService', () => {
  beforeEach(() => {
    plansRepository = new PlansRepository();

    allPlans = new AllPlansService(plansRepository);
  });

  it('should be able list all plans', async () => {
    const plans = await allPlans.execute();
    expect(plans[0].name).toBe('FaleMais 30');
  });
});
