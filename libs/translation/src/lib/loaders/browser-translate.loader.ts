import { HttpClient } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs';

/**
 * Browser TranslateLoader
 */
export class BrowserTranslateLoader implements TranslateLoader {
  constructor(
    private transferState: TransferState,
    private httpClient: HttpClient,
    private prefix: string = '',
    private suffix: string = ''
  ) {}

  getTranslation(lang: string): Observable<any> {
    const key = makeStateKey<number>(`transfer-translate-${lang}`);
    const data = this.transferState.get(key, null);
    if (data) {
      return new Observable(observer => {
        observer.next(data);
        observer.complete();
      });
    } else {
      return new TranslateHttpLoader(this.httpClient, `/${this.prefix}/`, this.suffix).getTranslation(lang);
    }
  }
}
