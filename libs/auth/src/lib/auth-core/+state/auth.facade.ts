import { Injectable } from '@angular/core';
import { SignInPayload } from '@medium-stories/entities';
import { select, Store } from '@ngrx/store';

import { AuthFacade } from '../interfaces/auth-facade.interface';
import * as AuthActions from './auth.actions';
import { AuthPartialState } from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class BaseAuthFacade implements AuthFacade {
  signIn$ = this.store.pipe(select(AuthSelectors.getSignIn));

  signInError$ = this.store.pipe(select(AuthSelectors.getSignInError));

  signInRun$ = this.store.pipe(select(AuthSelectors.getSignInRun));

  signOutError$ = this.store.pipe(select(AuthSelectors.getSignOutError));

  signOutRun$ = this.store.pipe(select(AuthSelectors.getSignOutRun));

  constructor(private store: Store<AuthPartialState>) {}

  signIn(force?: boolean): void {
    this.store.dispatch(AuthActions.signIn({ payload: { force } }));
  }
  signInSet(payload: SignInPayload): void {
    this.store.dispatch(AuthActions.signInSet({ payload }));
  }

  signInClear(): void {
    this.store.dispatch(AuthActions.signInClear());
  }

  signOut(force?: boolean): void {
    this.store.dispatch(AuthActions.signOut({ payload: { force } }));
  }
}
