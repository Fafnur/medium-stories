import { createAction } from '@ngrx/store';
import { ApolloError } from 'apollo-client';

import { SignInPayload, SignInResponse } from '@medium-stories/entities';
import { payload, payloadForce } from '@medium-stories/store';

export const signIn = createAction('[Auth] Sing In', payloadForce());

export const signInSet = createAction('[Auth] Sing In Set', payload<SignInPayload>());

export const signInClear = createAction('[Auth] Sing In Clear');

export const signInCancel = createAction('[Auth] Sing In Cancel');

export const signInRun = createAction('[Auth] Sing In Run');

export const signInSuccess = createAction('[Auth] Sing In Success', payload<SignInResponse>());

export const signInFailure = createAction('[Auth] Sing In Failure', payload<ApolloError>());

export const signOut = createAction('[Auth] Sign Out', payloadForce());

export const signOutCancel = createAction('[Auth] Sign Out Cancel');

export const signOutRun = createAction('[Auth] Sign Out Run');

export const signOutSuccess = createAction('[Auth] Sign Out Success');

export const signOutFailure = createAction('[Auth] Sign Out Failure', payload<ApolloError>());
