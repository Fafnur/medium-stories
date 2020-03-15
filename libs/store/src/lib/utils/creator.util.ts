import { props } from '@ngrx/store';
import { Props } from '@ngrx/store/src/models';

import { ActionForcePayload } from '../interfaces/payload.interface';

export function payload<P>(): Props<{ payload: P }> {
  return props<{ payload: P }>();
}

export function payloadForce<P extends object = object>(): Props<{ payload: P & ActionForcePayload }> {
  return payload<P & ActionForcePayload>();
}
