import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserEffects } from './+state/user.effects';
import { BaseUserFacade } from './+state/user.facade';
import { reducer, USER_FEATURE_KEY } from './+state/user.reducer';
import { UserApollo } from './interfaces/user-apollo.interface';
import { UserFacade } from './interfaces/user-facade.interface';
import { UsersCoreOptions } from './interfaces/users-core-options.interface';
import { BaseUserApollo } from './services/base-user-apollo.service';

@NgModule({
  imports: [StoreModule.forFeature(USER_FEATURE_KEY, reducer), EffectsModule.forFeature([UserEffects])]
})
export class UsersCoreModule {
  static forRoot(options: Partial<UsersCoreOptions> = {}): ModuleWithProviders<UsersCoreModule> {
    return {
      ngModule: UsersCoreModule,
      providers: [
        {
          provide: UserApollo,
          useClass: options.apollo || BaseUserApollo
        },
        {
          provide: UserFacade,
          useClass: options.facade || BaseUserFacade
        }
      ]
    };
  }
}
