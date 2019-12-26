import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EventEffects } from './+state/event.effects';
import { EventFacade } from './+state/event.facade';
import { EVENT_FEATURE_KEY, eventReducer } from './+state/event.reducer';

@NgModule({
  imports: [StoreModule.forFeature(EVENT_FEATURE_KEY, eventReducer), EffectsModule.forFeature([EventEffects])],
  providers: [EventFacade]
})
export class EventsCoreModule {}
