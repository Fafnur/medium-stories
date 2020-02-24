import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';
import * as fromUser from './+state/user.reducer';
import { usersContainers, usersRoutes } from './users.common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [...usersContainers],
  providers: [UserFacade]
})
export class UsersModule {}
