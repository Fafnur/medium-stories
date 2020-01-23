import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@medium-stories/shared';

import { formsLiteComponents, formsLiteDirectives, formsLiteEntryComponents, formsLiteExportComponents } from './dynamic-forms.common';
import { FormConstructor } from './interfaces/form-constructor.interface';
import { BaseFormConstructor } from './services/base-form-constructor.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, TranslateModule],
  declarations: [...formsLiteComponents, ...formsLiteEntryComponents, ...formsLiteDirectives],
  entryComponents: formsLiteEntryComponents,
  exports: [...formsLiteExportComponents, ...formsLiteDirectives],
  providers: [
    {
      provide: FormConstructor,
      useClass: BaseFormConstructor
    }
  ]
})
export class DynamicFormsModule {}
