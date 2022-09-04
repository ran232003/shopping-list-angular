import { Action } from '@ngrx/store';
import { Ingedient } from '../../shared/ingedient.model';
import {
  AddIngridient,
  ADD_INGRIDIENT,
  ADD_INGRIDIENT_FROM_RECIPE,
  DELETE_INGRIDIENT,
  UPDATE_INGRIDIENT,
} from './shopping-list.actions';

const initialState = {
  ingedients: [new Ingedient('testss', 14), new Ingedient('test', 15)],
};

export const shoppingReducer = (state = initialState, action: any) => {
  if (action.type === ADD_INGRIDIENT) {
    console.log('add', action.payload);
    return {
      ...state,
      ingedients: [...state.ingedients, action.payload],
    };
  } else if (action.type === ADD_INGRIDIENT_FROM_RECIPE) {
    console.log('ADD_INGRIDIENT_FROM_RECIPE', action.payload);
    return {
      ...state,
      ingedients: [...state.ingedients, ...action.payload],
    };
  } else if (action.type === UPDATE_INGRIDIENT) {
    console.log('UPDATE_INGRIDIENT', action.payload);
    let newState = [...state.ingedients];
    newState.map((ing, index) => {
      console.log(ing, action.payload.oldIng, index);
      if (ing.id === action.payload.oldIng.id) {
        console.log(newState[index], action.payload);

        newState[index] = {
          ...newState[index],
          name: action.payload.name,
          amount: action.payload.amount,
        };
        console.log(newState[index]);
      }
    });
    return { ...state, ingedients: newState };
    // return {
    //   ...state,
    //   ingedients: [...state.ingedients, ...action.payload],
    // };
  } else if (action.type === DELETE_INGRIDIENT) {
    console.log('DELETE_INGRIDIENT', action.payload);
    let newState = state.ingedients.filter((ing) => {
      return ing.id !== action.payload.id;
    });
    return {
      ...state,
      ingedients: newState,
    };
  }
  return state;
};
