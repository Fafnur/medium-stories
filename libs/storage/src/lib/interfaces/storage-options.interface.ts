import { Type } from '@angular/core';

import { CookieService } from './cookie-service.interface';
import { CookieStorage } from './cookie-storage.interface';
import { LocalStorage } from './local-storage.interface';
import { MemoryStorage } from './memory-storage.interface';
import { SessionStorage } from './session-storage.interface';

/**
 * Storage options
 */
export interface StorageOptions {
  /**
   * Cookie service
   */
  cookieService: Type<CookieService>;

  /**
   * Cookie storage
   */
  cookieStorage: Type<CookieStorage>;

  /**
   * Local storage
   */
  localStorage: Type<LocalStorage>;

  /**
   * Local storage
   */
  memoryStorage: Type<MemoryStorage>;

  /**
   * Session storage
   */
  sessionStorage: Type<SessionStorage>;
}
