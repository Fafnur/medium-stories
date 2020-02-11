import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

import { ResponsiveModule } from '@medium-stories/responsive';
import { SharedModule } from '@medium-stories/shared';

import { layoutsComponents, layoutsContainers } from './layouts.common';
import { LayoutsCoreModule } from '../layout-core/layouts-core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutsCoreModule,
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
  exports: [...layoutsComponents, ...layoutsContainers]
})
export class LayoutsModule {}
