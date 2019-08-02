import { Type } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import { CookieStorage } from './cookie-storage.interface';
import { LocalStorage } from './local-storage.interface';
import { SessionStorage } from './session-storage.interface';

/**
 * Storage options interface
 */
export interface StorageOptions {
  /**
   * Set cookie storage for local storage and session storage in incognito mode
   */
  cookieInIncognito?: boolean;

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
   * Session storage
   */
  sessionStorage: Type<SessionStorage>;
}
