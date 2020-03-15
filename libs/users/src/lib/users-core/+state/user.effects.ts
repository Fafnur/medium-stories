import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { User } from '@medium-stories/entities';
import { AbstractEffects, ActionEffectPayload, ActionForcePayload } from '@medium-stories/store';

import { UserApollo } from '../interfaces/user-apollo.interface';
import * as UserActions from './user.actions';
import { USER_FEATURE_KEY, UserPartialState, UserState } from './user.reducer';

@Injectable()
export class UserEffects extends AbstractEffects<UserState> {
  loadUser$ = createEffect(() =>
    this.dataPersistence.fetch<ActionEffectPayload<ActionForcePayload>>(UserActions.loadUser, {
      run: (action, store) =>
        isPlatformBrowser(this.platformId) && (!this.getState(store).userLoadRun || action.payload.force)
          ? UserActions.loadUserRun()
          : UserActions.loadUserCancel(),
      onError: (action, error) => this.errorHandler(action, error)
    })
  );

  loadUserRun$ = createEffect(() =>
    this.dataPersistence.fetch(UserActions.loadUserRun, {
      run: action =>
        this.userApollo.loadUser().pipe(
          map<User, Action>(payload => UserActions.loadUserSuccess({ payload }))
        ),
      onError: (action, error) => this.errorHandler(action, error, UserActions.loadUserFailure)
    })
  );

  constructor(
    private dataPersistence: DataPersistence<UserPartialState>,
    private userApollo: UserApollo,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    super(USER_FEATURE_KEY);
  }
}
