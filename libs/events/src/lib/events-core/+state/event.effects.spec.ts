import { async, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { EventLoaded, LoadEvent } from './event.actions';
import { EventEffects } from './event.effects';

describe('EventEffects', () => {
  let actions: Observable<any>;
  let effects: EventEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [EventEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.inject(EventEffects);
  });

  describe('loadEvent$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadEvent({}) });
      expect(effects.loadEvent$).toBeObservable(hot('-a-|', { a: new EventLoaded({} as any) }));
    });
  });
});
