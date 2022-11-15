import { Action, createReducer, on } from '@ngrx/store';


import { AuthStateInterface } from '../types/authState.interface';
import { registerAction } from './actions';

//defining initial state
const initialState: AuthStateInterface = {
  isSubmitting: false,
};
//creating reducers
const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);
export function reducers(state:AuthStateInterface, action: Action){
  return authReducer(state, action)
}