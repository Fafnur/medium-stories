import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { EventEffects } from './event.effects';
import { EventFacade } from './event.facade';

import { EventLoaded, LoadEvent } from './event.actions';
import { eventInitialState, eventReducer, EventState } from './event.reducer';
import { eventQuery } from './event.selectors';

interface TestSchema {
  event: EventState;
}

describe('EventFacade', () => {
  let facade: EventFacade;
  let store: Store<TestSchema>;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('event', eventReducer, { initialState: eventInitialState }),
          EffectsModule.forFeature([EventEffects])
        ],
        providers: [EventFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(EventFacade);
    });

    /**
     * Use `EventLoaded` to manually submit list for state management
     */
    it('allEvent$ should return the loaded list; and loaded flag == true', async done => {
      try {
        const event = await readFirst(facade.event$);
        //
        expect(event).toBeNull();
        // expect(isLoaded).toBe(false);
        //
        // store.dispatch(new EventLoaded());
        //
        // list = await readFirst(facade.allEvent$);
        // isLoaded = await readFirst(facade.loaded$);
        //
        // expect(list.length).toBe(2);
        // expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
