import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LayoutEffects } from './+state/layout.effects';
import { LayoutFacade } from './+state/layout.facade';
import { LAYOUT_FEATURE_KEY, layoutReducer } from './+state/layout.reducer';

@NgModule({
  imports: [StoreModule.forFeature(LAYOUT_FEATURE_KEY, layoutReducer), EffectsModule.forFeature([LayoutEffects])],
  providers: [LayoutFacade]
})
export class LayoutsCoreModule {}
