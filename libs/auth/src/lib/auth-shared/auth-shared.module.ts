import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { authComponents } from './auth-shared.common';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [...authComponents],
  exports: [...authComponents]
})
export class AuthSharedModule {}
