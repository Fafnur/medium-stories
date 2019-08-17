import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AbstractEffects } from '@medium-stories/store';

import { LAYOUT_FEATURE_KEY, LayoutPartialState, LayoutState } from './layout.reducer';

@Injectable()
export class LayoutEffects extends AbstractEffects<LayoutState> {
  constructor(private actions$: Actions, private dataPersistence: DataPersistence<LayoutPartialState>) {
    super(LAYOUT_FEATURE_KEY);
  }
}
