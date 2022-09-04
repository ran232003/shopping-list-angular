import { Action } from '@ngrx/store';
import { Ingedient } from 'src/app/shared/ingedient.model';

export const ADD_INGRIDIENT = 'ADD_INGRIDIENT';
export const ADD_INGRIDIENT_FROM_RECIPE = 'ADD_INGRIDIENT_FROM_RECIPE';
export const UPDATE_INGRIDIENT = 'UPDATE_INGRIDIENT';
export const DELETE_INGRIDIENT = 'DELETE_INGRIDIENT';
export class AddIngridient implements Action {
  type = ADD_INGRIDIENT;
  // payload: Ingedient;
  constructor(public payload: Ingedient) {}
}
export class AddIngridientsFromRecipe implements Action {
  type = ADD_INGRIDIENT_FROM_RECIPE;
  // payload: Ingedient;
  constructor(public payload: Ingedient[]) {}
}
export class UpdateIngridients implements Action {
  type = UPDATE_INGRIDIENT;
  // payload: Ingedient;
  constructor(public payload: {}) {}
}
export class DeleteIngridients implements Action {
  type = DELETE_INGRIDIENT;
  // payload: Ingedient;
  constructor(public payload: {}) {}
}
