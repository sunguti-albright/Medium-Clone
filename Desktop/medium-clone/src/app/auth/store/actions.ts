import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequestInterface';
import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
    ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
export const loginaAtion = createAction(
  ActionTypes.LOGIN,
  props<{username:string; password:string}>()
)