import { Inject, Injectable } from '@angular/core';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { CookieOptions, CookieOptionsProvider, CookieService } from 'ngx-cookie';

/**
 * Custom CookieService
 * @see https://github.com/salemdar/ngx-cookie/pull/82#issuecomment-487301560
 */
@Injectable()
export class ServerCookieService extends CookieService {
  constructor(@Inject(REQUEST) private request: any, @Inject(RESPONSE) private response: any, _optionsProvider: CookieOptionsProvider) {
    super(_optionsProvider);
  }

  put(key: string, value: string, options: CookieOptions = {}): void {
    let findKey = false;
    let newCookie = Object.keys(this.getAll())
      // tslint:disable-next-line: no-shadowed-variable
      .map(keyItem => {
        if (keyItem === key) {
          findKey = true;
          return `${key}=${value}`;
        }
        return `${keyItem}=${this.get(keyItem)}`;
      })
      .join('; ');
    if (!findKey) {
      newCookie += `; ${key}=${value};`;
    }
    this.request.headers.cookie = newCookie;
    // not sure
    this.cookieString = newCookie;
  }

  remove(key: string, options?: CookieOptions): void {
    const newCookie = Object.keys(this.getAll())
      // tslint:disable-next-line: no-shadowed-variable
      .map(keyItem => {
        if (keyItem === key) {
          return '';
        }
        return `${keyItem}=${this.get(keyItem)}`;
      })
      .join('; ');
    this.request.headers.cookie = newCookie;
    // not sure
    this.cookieString = newCookie;
  }

  protected get cookieString(): string {
    return this.request.cookie || this.request.headers['cookie'] || '';
  }

  protected set cookieString(val: string) {
    this.request.cookie = val;
    this.response.cookie = val;
  }
}
