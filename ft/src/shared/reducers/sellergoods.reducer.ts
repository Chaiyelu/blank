import { Reducer, Action } from "@ngrx/store";
import { GoodModel } from "../models/good.model";

export const sellerGoodsReducer = (state: GoodModel[] = [], action: Action) => {
  switch (action.type) {
    case 'UPDATE_GOODS':
      console.log('UPDATE_GOODS');
      let aaa = state;
      return aaa;
    case 'FETCH_FROM_API':
      console.log('FETCH_FROM_API');
      return [
        ...action.payload
      ];
    default:
      return state;
  }
}
