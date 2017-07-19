import { Reducer, Action } from "@ngrx/store";


export const collectEditStatusReducer = (state = false, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_COLL_EDIT_STAT':
      return !state;
    default:
      return state;
  }
}
