import { ModuleWithProviders, NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';

import { LocalStorage } from './interfaces/local-storage.interface';
import { SessionStorage } from './interfaces/session-storage.interface';
import { StorageOptions } from './interfaces/storage-options.interface';
import { CookieStorage } from './interfaces/cookie-storage.interface';
import { COOKIE_IN_INCOGNITO } from './storage.tokens';
import { BaseCookieStorage } from './storages/base-cookie.storage';
import { BrowserLocalStorage } from './storages/browser-local.storage';
import { BrowserSessionStorage } from './storages/browser-session.storage';

@NgModule({
  imports: [CookieModule.forRoot()]
})
export class BrowserStorageModule {
  static forRoot(options: Partial<StorageOptions> = {}): ModuleWithProviders {
    return {
      ngModule: BrowserStorageModule,
      providers: [
        {
          provide: COOKIE_IN_INCOGNITO,
          useValue: !!options.cookieInIncognito
        },
        {
          provide: CookieStorage,
          useClass: options.cookieStorage || BaseCookieStorage
        },
        {
          provide: LocalStorage,
          useClass: options.localStorage || BrowserLocalStorage
        },
        {
          provide: SessionStorage,
          useClass: options.sessionStorage || BrowserSessionStorage
        }
      ]
    };
  }
}
