import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ResponsiveModule } from '@medium-stories/responsive';
import { SharedModule } from '@medium-stories/shared';

import { layoutsComponents, layoutsExportComponents } from './layouts.common';

@NgModule({
  imports: [CommonModule, ResponsiveModule, RouterModule, SharedModule, TranslateModule],
  declarations: [...layoutsComponents],
  exports: [...layoutsExportComponents]
})
export class LayoutsModule {}
