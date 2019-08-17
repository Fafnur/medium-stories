import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { RESPONSIVE_FEATURE_KEY, ResponsiveActionTypes, ResponsiveState, SetWindowProps } from '@medium-stories/responsive';
import { AbstractEffects } from '@medium-stories/store';

import { CloseSideMenu } from './layout.actions';
import { LAYOUT_FEATURE_KEY, LayoutPartialState, LayoutState } from './layout.reducer';

@Injectable()
export class LayoutEffects extends AbstractEffects<LayoutState> {
  @Effect() switched$ = this.dataPersistence.fetch(ResponsiveActionTypes.SetWindowProps, {
    run: (action: SetWindowProps, store: LayoutPartialState) => {
      const responsiveState = this.getState<ResponsiveState>(store, RESPONSIVE_FEATURE_KEY);
      if (responsiveState.switched) {
        return new CloseSideMenu();
      }
    },
    onError: (action: SetWindowProps, error) => console.error(error.toString())
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<LayoutPartialState>) {
    super(LAYOUT_FEATURE_KEY);
  }
}
