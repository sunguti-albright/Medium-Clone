import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../../types/registerRequestInterface';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
    ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
export const RegisterSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);
export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE
)
// export const loginaAtion = createAction(
//   ActionTypes.LOGIN,
//   props<{username:string; password:string}>()
// );
