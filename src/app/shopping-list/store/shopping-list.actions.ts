import { Action } from '@ngrx/store';
import { Ingedient } from 'src/app/shared/ingedient.model';

export const ADD_INGRIDIENT = 'ADD_INGRIDIENT';

export class AddIngridient implements Action {
  type = ADD_INGRIDIENT;
  payload: Ingedient;
}
