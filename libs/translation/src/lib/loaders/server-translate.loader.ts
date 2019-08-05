import { makeStateKey, TransferState } from '@angular/platform-browser';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import * as fs from 'fs';
import { join } from 'path';

export class ServerTranslateLoader implements TranslateLoader {
  constructor(
    private transferState: TransferState,
    private appDist: string = '',
    private prefix: string = '',
    private suffix: string = ''
  ) {}

  getTranslation(lang: string): Observable<any> {
    return new Observable(observer => {
      const assets_folder = join(process.cwd(), 'dist/apps', this.appDist, 'browser', this.prefix);
      const jsonData = JSON.parse(fs.readFileSync(`${assets_folder}/${lang}${this.suffix}`, 'utf8'));
      const key = makeStateKey<number>('transfer-translate-' + lang);

      this.transferState.set(key, jsonData);

      observer.next(jsonData);
      observer.complete();
    });
  }
}
