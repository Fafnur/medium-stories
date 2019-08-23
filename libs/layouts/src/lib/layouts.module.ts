import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule, MatRippleModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

import { ResponsiveModule } from '@medium-stories/responsive';
import { SharedModule } from '@medium-stories/shared';

import { layoutsComponents, layoutsContainers } from './layouts.common';
import { LayoutsCommonModule } from './layouts-common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutsCommonModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    NgbModalModule,
    NgSelectModule,
    ResponsiveModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [...layoutsComponents, ...layoutsContainers],
  exports: [...layoutsContainers]
})
export class LayoutsModule {}
