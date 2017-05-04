import { RatingModel } from './rating.model';

export interface FoodModel {
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  sellCount: number;
  rating: number;
  info: string;
  ratings: RatingModel[];
  icon: string;
  image: string;
  count?: number;
}
