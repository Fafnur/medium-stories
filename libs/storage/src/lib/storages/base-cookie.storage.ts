import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import { CookieStorage } from '../interfaces/cookie-storage.interface';

/**
 * Base cookie storage
 */
@Injectable()
export class BaseCookieStorage implements CookieStorage {
  constructor(private cookieService: CookieService) {}

  get length(): number {
    return Object.keys(this.cookieService.getAll()).length;
  }

  clear(): void {
    this.cookieService.removeAll();
  }

  getItem(key: string): string | null {
    const item = this.cookieService.get(key);

    return item != null ? item : null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.cookieService.getAll());

    return index >= 0 && index < keys.length ? keys[index] : null;
  }

  removeItem(key: string): void {
    this.cookieService.remove(key);
  }

  setItem(key: string, data: string, options?: object): void {
    this.cookieService.put(key, data, options);
  }
}
