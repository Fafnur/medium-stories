import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromUser from './user.reducer';
import * as UserSelectors from './user.selectors';

@Injectable()
export class UserFacade {
  loaded$ = this.store.pipe(select(UserSelectors.getUserLoaded));
  allUser$ = this.store.pipe(select(UserSelectors.getAllUser));
  selectedUser$ = this.store.pipe(select(UserSelectors.getSelected));

  constructor(private store: Store<fromUser.UserPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
