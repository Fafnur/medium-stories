import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ResponsiveEffects } from './+state/responsive.effects';
import { ResponsiveFacade } from './+state/responsive.facade';
import { RESPONSIVE_FEATURE_KEY, responsiveReducer } from './+state/responsive.reducer';

@NgModule({
  imports: [StoreModule.forFeature(RESPONSIVE_FEATURE_KEY, responsiveReducer), EffectsModule.forFeature([ResponsiveEffects])],
  providers: [ResponsiveFacade]
})
export class ResponsiveCommonModule {}
