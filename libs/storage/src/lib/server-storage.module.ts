import { ModuleWithProviders, NgModule } from '@angular/core';
import { CookieModule, CookieService } from 'ngx-cookie';

import { CookieStorage } from './interfaces/cookie-storage.interface';
import { LocalStorage } from './interfaces/local-storage.interface';
import { SessionStorage } from './interfaces/session-storage.interface';
import { StorageOptions } from './interfaces/storage-options.interface';
import { ServerCookieService } from './services/server-cookie.service';
import { COOKIE_IN_INCOGNITO } from './storage.tokens';
import { BaseCookieStorage } from './storages/base-cookie.storage';
import { MemoryStorage } from './storages/memory.storage';

@NgModule({
  imports: [CookieModule.forRoot()]
})
export class ServerStorageModule {
  static forRoot(options: Partial<StorageOptions> = {}): ModuleWithProviders {
    return {
      ngModule: ServerStorageModule,
      providers: [
        {
          provide: COOKIE_IN_INCOGNITO,
          useValue: !!options.cookieInIncognito
        },
        {
          provide: CookieService,
          useClass: options.cookieService || ServerCookieService
        },
        {
          provide: CookieStorage,
          useClass: options.cookieStorage || BaseCookieStorage
        },
        {
          provide: LocalStorage,
          useClass: options.localStorage || options.cookieInIncognito ? options.cookieStorage || BaseCookieStorage : MemoryStorage
        },
        {
          provide: SessionStorage,
          useClass: options.sessionStorage || options.cookieInIncognito ? options.cookieStorage || BaseCookieStorage : MemoryStorage
        }
      ]
    };
  }
}
