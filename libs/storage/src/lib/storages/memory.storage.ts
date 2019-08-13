import { Dictionary } from '@medium-stories/common';

import { AbstractStorage } from '../interfaces/abstract-storage.interface';

/**
 * Memory Storage
 *
 * @description
 * It simple storage for emulate Web Storage API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
 */
export class MemoryStorage implements AbstractStorage {
  /**
   * Storage data
   */
  protected data: Dictionary<string> = {};

  get length(): number {
    return Object.keys(this.data).length;
  }

  clear(): void {
    this.data = {};
  }

  getItem(key: string): string | null {
    return key in this.data ? this.data[key] : null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.data);

    return index >= 0 && keys.length < index ? keys[index] : null;
  }

  removeItem(key: string): void {
    delete this.data[key];
  }

  setItem(key: string, value: string): void {
    this.data[key] = value;
  }
}
