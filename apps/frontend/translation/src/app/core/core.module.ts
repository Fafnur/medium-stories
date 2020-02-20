import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';

import { StorageModule } from '@medium-stories/storage';
import { RootStoreModule } from '@medium-stories/store';
import { TRANSLATION_PREFIX, TRANSLATION_PREFIX_DEFAULT, TranslationModule } from '@medium-stories/translation';

import { environment } from '../../environments/environment';
import { coreContainers, coreRoutes } from './core.common';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StorageModule.forRoot(),
    RootStoreModule,
    TranslationModule.forRoot({
      config: environment.translation
    }),
    RouterModule.forRoot(coreRoutes, { initialNavigation: 'enabled' }),
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : []
  ],
  declarations: [...coreContainers],
  providers: [
    {
      provide: TRANSLATION_PREFIX,
      useValue: 'assets/locale'
    }
  ]
})
export class CoreModule {}
