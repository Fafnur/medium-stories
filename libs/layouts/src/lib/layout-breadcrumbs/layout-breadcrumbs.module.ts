import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { layoutBreadCrumbsComponents } from './layout-breadcrumbs.common';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [...layoutBreadCrumbsComponents],
  exports: [...layoutBreadCrumbsComponents]
})
export class LayoutBreadcrumbsModule {}
