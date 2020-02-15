import { AbstractStorage } from './abstract-storage.interface';

import { CookieServiceSetOptions } from './cookie-service.interface';

/**
 * Cookie Storage
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
 */
export abstract class CookieStorage extends AbstractStorage {
  abstract setItem(key: string, value: string, options?: Partial<CookieServiceSetOptions>): void;
}
