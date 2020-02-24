import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromUser from './user.reducer';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return UserActions.loadUserSuccess({ user: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.loadUserFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}
