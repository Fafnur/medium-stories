import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { EventEffects } from './event.effects';
import { LoadEvent, EventLoaded } from './event.actions';

describe('EventEffects', () => {
  let actions: Observable<any>;
  let effects: EventEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [EventEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(EventEffects);
  });

  describe('loadEvent$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadEvent() });
      expect(effects.loadEvent$).toBeObservable(hot('-a-|', { a: new EventLoaded([]) }));
    });
  });
});
