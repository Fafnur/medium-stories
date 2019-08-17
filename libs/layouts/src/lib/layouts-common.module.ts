import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LAYOUT_FEATURE_KEY, layoutReducer } from './+state/layout.reducer';
import { LayoutEffects } from './+state/layout.effects';
import { LayoutFacade } from './+state/layout.facade';

@NgModule({
  imports: [StoreModule.forFeature(LAYOUT_FEATURE_KEY, layoutReducer), EffectsModule.forFeature([LayoutEffects])],
  providers: [LayoutFacade]
})
export class LayoutsCommonModule {}
