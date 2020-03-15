import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { SignInResponse } from '@medium-stories/entities';
import { AbstractEffects, ActionEffectPayload, ActionForcePayload } from '@medium-stories/store';

import { AuthApollo } from '../interfaces/auth-apollo.interface';
import { AuthStorage } from '../interfaces/auth-storage.interface';
import * as AuthActions from './auth.actions';
import { AUTH_FEATURE_KEY, AuthPartialState, AuthState } from './auth.reducer';

@Injectable()
export class AuthEffects extends AbstractEffects<AuthState> {
  signIn$ = createEffect(() =>
    this.dataPersistence.fetch<ActionEffectPayload<ActionForcePayload>>(AuthActions.signIn, {
      run: (action, state) => {
        return isPlatformBrowser(this.platformId) && (!this.getState(state).signInRun || action.payload.force)
          ? AuthActions.signInRun()
          : AuthActions.signInCancel();
      },
      onError: (action, error) => this.errorHandler(action, error)
    })
  );

  signInRun$ = createEffect(() =>
    this.dataPersistence.fetch(AuthActions.signInRun, {
      id: (action, state) => this.getIdByPayload(this.getState(state).signIn),
      run: (action, state) => {
        return this.authApollo.signIn(this.getState(state).signIn).pipe(
          map<SignInResponse, Action>(payload => {
            this.authStorage.setAccessToken(payload.accessToken);
            return AuthActions.signInSuccess({ payload });
          })
        );
      },
      onError: (action, error) => this.errorHandler(action, error, AuthActions.signInFailure)
    })
  );

  // signInSuccess$ = createEffect(() =>
  //   this.dataPersistence.fetch(AuthActions.signInSuccess, {
  //     run: (action: ActionPayload<ActionPropsPayload<SignInResponse>>, state) => {
  //     },
  //     onError: (action, error) => this.errorHandler(action, error)
  //   })
  // );

  signOut$ = createEffect(() =>
    this.dataPersistence.fetch<ActionEffectPayload<ActionForcePayload>>(AuthActions.signOut, {
      run: (action, state) => {
        return isPlatformBrowser(this.platformId) && (!this.getState(state).signOutRun || action.payload.force)
          ? AuthActions.signOutRun()
          : AuthActions.signOutCancel();
      },
      onError: (action, error) => this.errorHandler(action, error)
    })
  );

  signOutRun$ = createEffect(() =>
    this.dataPersistence.fetch(AuthActions.signOutRun, {
      run: () => {
        return this.authApollo.signOut().pipe(
          map<void, Action>(() => {
            this.authStorage.removeAccessToken();

            return AuthActions.signOutSuccess();
          })
        );
      },
      onError: (action, error) => this.errorHandler(action, error, AuthActions.signOutFailure)
    })
  );

  // signOutSuccess$ = createEffect(() =>
  //   this.dataPersistence.fetch(AuthActions.signOutSuccess, {
  //     run: (action, state) => {
  //       // TODO: clear storage
  //     },
  //     onError: (action, error) => this.errorHandler(action, error)
  //   })
  // );

  constructor(
    private dataPersistence: DataPersistence<AuthPartialState>,
    private authApollo: AuthApollo,
    private authStorage: AuthStorage,
    @Inject(PLATFORM_ID) protected platformId: any
  ) {
    super(AUTH_FEATURE_KEY);
  }
}
