import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { sharedDirectives } from './shared.common';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [...sharedDirectives],
  exports: [...sharedDirectives]
})
export class SharedModule {}
