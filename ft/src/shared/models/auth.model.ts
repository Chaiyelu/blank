import { UserModel } from "./user.model";

export class Auth {
  user?: UserModel;
  isLogin: boolean;
  errMsg?: string;
  redirectUrl?: string;
}
