import { Inject, Injectable } from '@angular/core';

import { CookieStorage } from '../interfaces/cookie-storage.interface';
import { SessionStorage } from '../interfaces/session-storage.interface';
import { COOKIE_IN_INCOGNITO } from '../storage.tokens';
import { storageAvailable } from '../utils/storage.util';
import { MemoryStorage } from './memory.storage';

/**
 * Browser session storage
 */
@Injectable()
export class BrowserSessionStorage implements SessionStorage {
  /**
   * Storage
   */
  private readonly storage: Storage;

  constructor(@Inject(COOKIE_IN_INCOGNITO) private cookieInIncognito: boolean, private cookieStorage: CookieStorage) {
    if (storageAvailable('sessionStorage')) {
      this.storage = window.sessionStorage;
    } else if (this.cookieInIncognito) {
      this.storage = this.cookieStorage;
    } else {
      this.storage = new MemoryStorage();
    }
  }

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
