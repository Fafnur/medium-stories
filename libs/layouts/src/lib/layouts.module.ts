import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { layoutsComponents } from './layouts.common';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [...layoutsComponents],
  exports: [...layoutsComponents]
})
export class LayoutsModule {}
