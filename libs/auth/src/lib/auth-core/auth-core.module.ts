import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from './+state/auth.effects';
import { BaseAuthFacade } from './+state/auth.facade';
import * as fromAuth from './+state/auth.reducer';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthApollo } from './interfaces/auth-apollo.interface';
import { AuthCoreOptions } from './interfaces/auth-core-options.interface';
import { AuthFacade } from './interfaces/auth-facade.interface';
import { AuthStorage } from './interfaces/auth-storage.interface';
import { BaseAuthApollo } from './services/base-auth-apollo.service';
import { BaseAuthStorage } from './services/base-auth-storage.service';

@NgModule({
  imports: [StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer), EffectsModule.forFeature([AuthEffects])]
})
export class AuthCoreModule {
  static forRoot(options: Partial<AuthCoreOptions> = {}): ModuleWithProviders<AuthCoreModule> {
    return {
      ngModule: AuthCoreModule,
      providers: [
        AuthInterceptor,
        {
          provide: AuthApollo,
          useClass: options.apollo || BaseAuthApollo
        },
        {
          provide: AuthFacade,
          useClass: options.facade || BaseAuthFacade
        },
        {
          provide: AuthStorage,
          useClass: options.storage || BaseAuthStorage
        }
      ]
    };
  }
}
