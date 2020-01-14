import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@medium-stories/shared';

import { FieldTypeheadComponent } from './components/field-typehead/field-typehead.component';

const typeheadComponent: any[] = [FieldTypeheadComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NgbTypeaheadModule, ReactiveFormsModule, SharedModule, TranslateModule],
  declarations: typeheadComponent,
  entryComponents: typeheadComponent,
  exports: typeheadComponent
})
export class DynamicFormsTypeheadModule {}
