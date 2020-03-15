import { createAction } from '@ngrx/store';
import { ApolloError } from 'apollo-client';

import { User } from '@medium-stories/entities';
import { payload, payloadForce } from '@medium-stories/store';

export const loadUser = createAction('[User] Load User', payloadForce());

export const loadUserCancel = createAction('[User] Load User Cancel');

export const loadUserRun = createAction('[User] Load User Run');

export const loadUserSuccess = createAction('[User] Load User Success', payload<User>());

export const loadUserFailure = createAction('[User] Load User Failure', payload<ApolloError>());
