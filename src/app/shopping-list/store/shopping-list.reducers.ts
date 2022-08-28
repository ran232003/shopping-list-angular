import { Action } from '@ngrx/store';
import { Ingedient } from '../../shared/ingedient.model';
import { AddIngridient, ADD_INGRIDIENT } from './shopping-list.actions';

const initialState = {
  ingedients: [new Ingedient('test', 10), new Ingedient('test', 5)],
};

export const shoppingReducer = (
  state = initialState,
  action: AddIngridient
) => {
  if (action.type === ADD_INGRIDIENT) {
    return {
      ...state,
      Ingedient: [...state.ingedients, action.payload],
    };
  }
};
