import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { TranslateLoader } from '@ngx-translate/core';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Observable } from 'rxjs';

export function serverTranslateFactory(appDist: string, prefix: string, suffix: string) {
  return new ServerTranslateLoader(appDist, prefix, suffix);
}

export function serverTransferStatTranslateFactory(transferState: TransferState, appDist: string, prefix: string, suffix: string) {
  return new ServerTransferStateTranslateLoader(transferState, appDist, prefix, suffix);
}

@Injectable()
export class ServerTranslateLoader implements TranslateLoader {
  constructor(private appDist: string = '', private prefix: string = '', private suffix: string = '') {}

  getTranslation(lang: string): Observable<any> {
    return new Observable(observer => {
      const assets_folder = join(process.cwd(), 'dist/apps', this.appDist, 'browser', this.prefix);
      const jsonData = JSON.parse(readFileSync(`${assets_folder}/${lang}${this.suffix}`, 'utf8'));
      observer.next(jsonData);
      observer.complete();
    });
  }
}

@Injectable()
export class ServerTransferStateTranslateLoader implements TranslateLoader {
  constructor(
    private transferState: TransferState,
    private appDist: string = '',
    private prefix: string = '',
    private suffix: string = ''
  ) {}

  getTranslation(lang: string): Observable<any> {
    return new Observable(observer => {
      const assets_folder = join(process.cwd(), 'dist/apps', this.appDist, 'browser', this.prefix);
      const jsonData = JSON.parse(readFileSync(`${assets_folder}/${lang}${this.suffix}`, 'utf8'));
      const key = makeStateKey<number>('transfer-translate-' + lang);

      this.transferState.set(key, jsonData);

      observer.next(jsonData);
      observer.complete();
    });
  }
}
