import { Reducer, Action } from "@ngrx/store";
import { Auth } from "../models/auth.model";

export const authReducer = (state: Auth = {
  user: null,
  isLogin: false,
  errMsg: null,
  redirectUrl: null
}, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, action.payload, {hasError: false});
    case 'LOGOUT':
      return Object.assign({}, state, {
        user: null,
        isLogin: false,
        errMsg: 'no credentials',
        redirectUrl: ''
      });
    default:
      return state;
  }
}
