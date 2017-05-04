import { FoodModel } from './food.model';

export interface GoodModel {
  name: string;
  type: number;
  foods: FoodModel[];
}
