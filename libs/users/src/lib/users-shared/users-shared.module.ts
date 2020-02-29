import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { usersSharedComponents } from './users-shared.common';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [...usersSharedComponents],
  exports: [...usersSharedComponents]
})
export class UsersSharedModule {}
