export interface RatingModel {
  username: string;
  rateTime: string;
  deliveryTime: number;
  score: number;
  rateType: number;
  text: string;
  avatar: string;
  recommend:string[];
}

export interface RatingQueryParams {
  sellerId?: string;
  rateType?: number;
  page?: number;
  offset?: number;
}
