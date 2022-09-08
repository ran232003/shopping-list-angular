import { Action } from '@ngrx/store';
import { User } from 'src/app/shared/user.model';

export const INIT_USER = 'INIT_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export class SetUser implements Action {
  type = INIT_USER;

  constructor(public payload: {}) {}
}

export class loginUser implements Action {
  type = LOGIN_USER;

  constructor(public payload: {}) {}
}
export class LogOut implements Action {
  type = LOGOUT_USER;

  constructor() {}
}
