import { Food } from "./implementation-details.model";

export class FoodMock {
  private obj: Food = {
    uid: `food_uuid${Math.random() * 10000}`,
    dish: 'dishMock',
    description: 'descriptionMock',
  };

  static generateN(amount: number): Food[] {
    return Array.from({ length: amount })
      .fill(null)
      .map(() => new FoodMock().build());
  }

  build(): Food {
    return this.obj;
  }

  setUid(value: Food['uid']) {
    this.obj.uid = value;
    return this;
  }
  setDish(value: Food['dish']) {
    this.obj.dish = value;
    return this;
  }
  setDescription(value: Food['description']) {
    this.obj.description = value;
    return this;
  }
}
