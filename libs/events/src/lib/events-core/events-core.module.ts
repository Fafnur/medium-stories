import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EventEffects } from './+state/event.effects';
import { EventFacade } from './+state/event.facade';
import { EVENT_FEATURE_KEY, eventReducer } from './+state/event.reducer';
import { EventsCoreOptions } from './interfaces/events-core-options.interface';
import { EventApollo } from './interfaces/event-apollo.interface';
import { BaseEventApollo } from './services/base-event-apollo.service';

@NgModule({
  imports: [StoreModule.forFeature(EVENT_FEATURE_KEY, eventReducer), EffectsModule.forFeature([EventEffects])]
})
export class EventsCoreModule {
  static forRoot(options: Partial<EventsCoreOptions> = {}): ModuleWithProviders {
    return {
      ngModule: EventsCoreModule,
      providers: [
        EventFacade,
        {
          provide: EventApollo,
          useClass: options.apollo || BaseEventApollo
        }
      ]
    };
  }
}
