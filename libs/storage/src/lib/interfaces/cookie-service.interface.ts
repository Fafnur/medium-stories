/**
 * Cookie service set options
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
 */
export interface CookieServiceSetOptions {
  /**
   * expires
   */
  expires: number | Date;

  /**
   * Path
   */
  path: string;

  /**
   * Domain
   */
  domain: string;

  /**
   * Secure
   */
  secure: boolean;

  /**
   * Same site
   */
  sameSite: 'Lax' | 'None' | 'Strict';
}

/**
 * Cookie service
 * It's port ngx-cookie-service
 * @see https://github.com/stevermeister/ngx-cookie-service
 */
export abstract class CookieService {
  /**
   * @param name Cookie name
   */
  abstract check(name: string): boolean;

  /**
   * @param name Cookie name
   */
  abstract get(name: string): string;

  /**
   * Get all
   */
  abstract getAll(): { [key: string]: any };

  /**
   * @param name Cookie name
   * @param value Cookie value
   * @param options Options
   */
  abstract put(name: string, value: string, options: Partial<CookieServiceSetOptions>): void;

  /**
   * @param name Cookie name
   * @param path Cookie path
   * @param domain Cookie domain
   */
  abstract remove(name: string, path?: string, domain?: string): void;

  /**
   * @param path Cookie path
   * @param domain Cookie domain
   */
  abstract removeAll(path?: string, domain?: string): void;
}
