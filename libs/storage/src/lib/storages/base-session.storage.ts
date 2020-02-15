import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { MemoryStorage } from '../interfaces/memory-storage.interface';
import { SessionStorage } from '../interfaces/session-storage.interface';
import { storageAvailable } from '../utils/storage.util';

/**
 * Browser session storage
 */
@Injectable()
export class BaseSessionStorage implements SessionStorage {
  /**
   * Storage
   */
  private readonly storage: Storage;

  constructor(
    private memoryStorage: MemoryStorage,
    /* tslint:disable-next-line:ban-types */
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (storageAvailable('sessionStorage')) {
      this.storage = window.sessionStorage;
    } else {
      this.storage = this.memoryStorage;
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
