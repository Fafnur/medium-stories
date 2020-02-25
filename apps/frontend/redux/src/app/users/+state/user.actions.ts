import { createAction, props } from '@ngrx/store';

import { UserEntity } from './user.models';

export const loadUser = createAction('[User] Load User');

export const loadUserSuccess = createAction('[User] Load User Success', props<{ user: UserEntity[] }>());

export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: any }>());
