import { ModuleWithProviders, NgModule } from '@angular/core';

import { CookieService } from './interfaces/cookie-service.interface';
import { CookieStorage } from './interfaces/cookie-storage.interface';
import { LocalStorage } from './interfaces/local-storage.interface';
import { MemoryStorage } from './interfaces/memory-storage.interface';
import { SessionStorage } from './interfaces/session-storage.interface';
import { StorageOptions } from './interfaces/storage-options.interface';
import { BaseCookieService } from './services/base-cookie.service';
import { BaseCookieStorage } from './storages/base-cookie.storage';
import { BaseLocalStorage } from './storages/base-local.storage';
import { BaseMemoryStorage } from './storages/base-memory.storage';
import { BaseSessionStorage } from './storages/base-session.storage';

@NgModule()
export class StorageModule {
  static forRoot(options: Partial<StorageOptions> = {}): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        {
          provide: CookieService,
          useClass: options.cookieService || BaseCookieService
        },
        {
          provide: CookieStorage,
          useClass: options.cookieStorage || BaseCookieStorage
        },
        {
          provide: LocalStorage,
          useClass: options.localStorage || BaseLocalStorage
        },
        {
          provide: MemoryStorage,
          useClass: options.memoryStorage || BaseMemoryStorage
        },
        {
          provide: SessionStorage,
          useClass: options.sessionStorage || BaseSessionStorage
        }
      ]
    };
  }
}
