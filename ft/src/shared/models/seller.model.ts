import { SupportModel } from './support.model';

export interface SellerModel {
  name: string;
  description: string;
  deliveryTime: number;
  score: number;
  serviceScore: number;
  foodScore: number;
  rankRate: number;
  minPrice: number;
  deliveryPrice: number;
  ratingCount: number;
  sellCount: number;
  bulletin: string;
  supports:SupportModel[];
  avatar: string;
  pics: any[];
  infos: any[]
}
