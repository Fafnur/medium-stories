import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RESPONSIVE_FEATURE_KEY, responsiveReducer } from './+state/responsive.reducer';
import { ResponsiveEffects } from './+state/responsive.effects';
import { ResponsiveFacade } from './+state/responsive.facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(RESPONSIVE_FEATURE_KEY, responsiveReducer), EffectsModule.forFeature([ResponsiveEffects])],
  providers: [ResponsiveFacade]
})
export class ResponsiveModule {}
