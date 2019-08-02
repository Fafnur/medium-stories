import { AbstractStorage } from './abstract-storage.interface';

/**
 * Cookie Storage
 */
export abstract class CookieStorage extends AbstractStorage {
  abstract setItem(key: string, value: string, options?: object): void;
}
