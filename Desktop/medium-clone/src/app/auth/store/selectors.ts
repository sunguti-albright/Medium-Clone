import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth'); //takes in the current state(selector) and initial state

//changing state function
export const isSubmittingSelector = createSelector(
    authFeatureSelector,
        (authState: AuthStateInterface) => authState.isSubmitting
)