import { ModuleWithProviders, NgModule } from '@angular/core';

import { ResponsiveOptions } from './interfaces/responsive-options.interface';
import { ResponsiveService } from './interfaces/responsive-service.interface';
import { ResponsiveStorage } from './interfaces/responsive-storage.interface';
import { ResponsiveCommonModule } from './responsive-common.module';
import { RESPONSIVE_MODE_DEFAULT, responsiveDirectives, responsivePipes } from './responsive.common';
import { RESPONSIVE_MODE } from './responsive.tokens';
import { BaseResponsiveStorage } from './services/base-responsive-storage.service';
import { BaseResponsiveService } from './services/base-responsive.service';

@NgModule({
  imports: [ResponsiveCommonModule],
  declarations: [...responsivePipes, ...responsiveDirectives],
  exports: [...responsivePipes, ...responsiveDirectives]
})
export class ResponsiveModule {
  static forRoot(options: Partial<ResponsiveOptions> = {}): ModuleWithProviders<ResponsiveModule> {
    return {
      ngModule: ResponsiveModule,
      providers: [
        {
          provide: RESPONSIVE_MODE,
          useValue: options.mode || RESPONSIVE_MODE_DEFAULT
        },
        {
          provide: ResponsiveService,
          useClass: options.service || BaseResponsiveService
        },
        {
          provide: ResponsiveStorage,
          useClass: options.storage || BaseResponsiveStorage
        }
      ]
    };
  }
}
