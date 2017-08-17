import { SupportModel } from './support.model';

export interface SellerModel {
  id: number;
  name: string;
  description: string;
  deliveryTime: number;
  score: number;
  serviceScore: number;
  foodScore: number;
  rankRate: number;
  minPrice: number;
  deliveryPrice: number;
  bulletin: string;
  avatar: string;
  address: string;
  mobile: string;
  disInfo: string;
  disStartTime: string;
  disEndTime: string;
  supports: SupportModel[];
  collectionId: number;
}
