import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TRANSLATION_FEATURE_KEY, translationReducer } from './+state/translation.reducer';
import { TranslationEffects } from './+state/translation.effects';
import { TranslationFacade } from './+state/translation.facade';

@NgModule({
  imports: [StoreModule.forFeature(TRANSLATION_FEATURE_KEY, translationReducer), EffectsModule.forFeature([TranslationEffects])],
  providers: [TranslationFacade]
})
export class TranslationCommonModule {}
