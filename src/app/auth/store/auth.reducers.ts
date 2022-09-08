import { INIT_USER, LOGIN_USER, LOGOUT_USER } from './auth.actions';

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action: any) => {
  if (INIT_USER) {
    console.log('INIT_USER', action.payload);
    return {
      ...state,
      user: action.payload,
    };
  } else if (LOGIN_USER) {
    console.log('LOGIN_USER', action.payload);
    return {
      ...state,
      user: action.payload,
    };
  } else if (LOGOUT_USER) {
    console.log('LOGOUT_USER', action.payload);
    return {
      ...state,
      user: null,
    };
  }
  return state;
};
