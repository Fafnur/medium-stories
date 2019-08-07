import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TRANSLATION_FEATURE_KEY, reducer } from './+state/translation.reducer';
import { TranslationEffects } from './+state/translation.effects';

@NgModule({
  imports: [StoreModule.forFeature(TRANSLATION_FEATURE_KEY, reducer), EffectsModule.forFeature([TranslationEffects])]
})
export class TranslationCommonModule {}
