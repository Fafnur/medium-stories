import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ResponsiveModule } from '@medium-stories/responsive';
import { SharedModule } from '@medium-stories/shared';

import { layoutsComponents, layoutsContainers } from './layouts.common';
import { LayoutsCommonModule } from './layouts-common.module';

@NgModule({
  imports: [CommonModule, LayoutsCommonModule, ResponsiveModule, RouterModule, SharedModule, TranslateModule],
  declarations: [...layoutsComponents, ...layoutsContainers],
  exports: [...layoutsContainers]
})
export class LayoutsModule {}
