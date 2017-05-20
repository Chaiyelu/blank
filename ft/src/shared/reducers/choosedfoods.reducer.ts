import { Reducer, Action } from "@ngrx/store";


export const choosedFoodsReducer = (state = [], action: Action) => {
  switch (action.type) {
    case 'UPDATE':
      console.log(action.payload);
      return action.payload;
    case 'EMPTY':
      state.forEach((state)=>{
        state.count = 0;
      })
      return state;
    default:
      return state;
  }
}
