import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { Request, Response } from 'express';

import { CookieService, CookieServiceSetOptions } from '../interfaces/cookie-service.interface';

@Injectable()
export class BaseCookieService implements CookieService {
  private readonly documentIsAccessible: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    /* tslint:disable-next-line:ban-types */
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(REQUEST) @Optional() private request: Request,
    @Inject(RESPONSE) @Optional() private response: Response
  ) {
    this.documentIsAccessible = isPlatformBrowser(this.platformId);
  }

  getCookieString(): string {
    return this.documentIsAccessible ? this.document.cookie : this.request.headers.cookie;
  }

  check(name: string): boolean {
    name = encodeURIComponent(name);
    const regExp: RegExp = this.getCookieRegExp(name);

    return regExp.test(this.getCookieString());
  }

  get(name: string): string {
    if (this.check(name)) {
      name = encodeURIComponent(name);

      const regExp: RegExp = this.getCookieRegExp(name);
      const result: RegExpExecArray = regExp.exec(this.getCookieString());

      return decodeURIComponent(result[1]);
    }

    return null;
  }

  getAll(): { [key: string]: string } {
    const cookies: { [key: string]: string } = {};

    if (this.getCookieString() && this.getCookieString() !== '') {
      const splits = this.getCookieString().split(';');
      for (const split of splits) {
        const currentCookie = split.split('=');

        currentCookie[0] = currentCookie[0].replace(/^ /, '');
        cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
      }
    }

    return cookies;
  }

  put(name: string, value: string, options: Partial<CookieServiceSetOptions> = { sameSite: 'none', secure: true }): void {
    let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';

    if (options.expires) {
      cookieString += 'expires=' + options.expires.toUTCString() + ';';
    }

    if (options.path) {
      cookieString += 'path=' + options.path + ';';
    }

    if (options.domain) {
      cookieString += 'domain=' + options.domain + ';';
    }

    if (options.secure) {
      cookieString += 'secure;';
    }

    if (options.sameSite) {
      cookieString += 'sameSite=' + options.sameSite + ';';
    }

    if (this.documentIsAccessible) {
      this.document.cookie = cookieString;
    } else {
      this.response.cookie(name, value, options);
    }
  }

  remove(name: string, path?: string, domain?: string): void {
    if (this.documentIsAccessible) {
      this.put(name, '', { path, domain, expires: new Date('Thu, 01 Jan 1970 00:00:01 GMT') });
    } else {
      this.response.clearCookie(name, { path, domain });
    }
  }

  removeAll(path?: string, domain?: string): void {
    const cookies = this.getAll();

    if (this.documentIsAccessible) {
      for (const cookieName of Object.keys(cookies)) {
        this.remove(cookieName, path, domain);
      }
    } else {
      for (const cookieName of Object.keys(cookies)) {
        this.response.clearCookie(cookieName, { path, domain });
      }
    }
  }

  /**
   * @param name Cookie name
   */
  protected getCookieRegExp(name: string): RegExp {
    const escapedName: string = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi, '\\$1');

    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
  }
}
