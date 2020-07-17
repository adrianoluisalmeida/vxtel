interface IPlan {
  id: number;
  name: string;
  durantion: number;
}

export default interface IPlansRepository {
  findAllPlans(): Promise<IPlan[]>;
  findById(id: number): Promise<IPlan>;
}
