import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { RootEffects } from './+state/root.effects';
import { reducers, rootInitialState } from './+state/root.reducer';
import { StoreRouterStateSerializer } from './services/store-router-state-serializer.service';

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot(reducers, {
      initialState: rootInitialState
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: StoreRouterStateSerializer
    }),
    EffectsModule.forRoot([RootEffects])
  ]
})
export class RootStoreModule {}
