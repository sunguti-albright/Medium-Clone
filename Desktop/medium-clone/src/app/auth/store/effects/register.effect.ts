import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { registerAction } from '../actions/register.actions';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe(ofType(registerAction),switchMap()))
  constructor(private actions$: Actions) {}
}
