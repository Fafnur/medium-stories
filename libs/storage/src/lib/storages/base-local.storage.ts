import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { LocalStorage } from '../interfaces/local-storage.interface';
import { MemoryStorage } from '../interfaces/memory-storage.interface';
import { storageAvailable } from '../utils/storage.util';

@Injectable()
export class BaseLocalStorage implements LocalStorage {
  /**
   * Storage
   */
  private readonly storage: Storage;

  constructor(
    private memoryStorage: MemoryStorage,
    /* tslint:disable-next-line:ban-types */
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId) && storageAvailable('localStorage')) {
      this.storage = window.localStorage;
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
