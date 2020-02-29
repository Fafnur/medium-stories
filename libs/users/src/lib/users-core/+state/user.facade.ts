import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { UserFacade } from '../interfaces/user-facade.interface';
import * as UserActions from './user.actions';
import * as fromUser from './user.reducer';
import * as UserSelectors from './user.selectors';

@Injectable()
export class BaseUserFacade implements UserFacade {
  user$ = this.store.pipe(select(UserSelectors.getUser));

  userLoadError$ = this.store.pipe(select(UserSelectors.getUserLoadError));

  userLoadRun$ = this.store.pipe(select(UserSelectors.getUserLoadRun));

  constructor(private store: Store<fromUser.UserPartialState>) {}

  loadUser(force?: boolean): void {
    this.store.dispatch(UserActions.loadUser({ payload: { force } }));
  }
}
