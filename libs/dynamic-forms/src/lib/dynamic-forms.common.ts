import { FieldCheckboxComponent } from './components/field-checkbox/field-checkbox.component';
import { FieldDateComponent } from './components/field-date/field-date.component';
import { FieldEmptyWrapperComponent } from './components/field-empty-wrapper/field-empty-wrapper.component';
import { FieldInputRangeComponent } from './components/field-input-range/field-input-range.component';
import { FieldInputUcfirstComponent } from './components/field-input-ucfirst/field-input-ucfirst.component';
import { FieldInputComponent } from './components/field-input/field-input.component';
import { FieldInputMaskComponent } from './components/field-input-mask/field-input-mask.component';
import { FieldRadioComponent } from './components/field-radio/field-radio.component';
import { FieldSelectComponent } from './components/field-select/field-select.component';
import { FieldTextareaComponent } from './components/field-textarea/field-textarea.component';
import { FieldWrapperComponent } from './components/field-wrapper/field-wrapper.component';
import { FormComponent } from './components/form/form.component';
import { FormHostDirective } from './directives/form-host.directive';
import { InputMaskDirective } from './directives/input-mask.directive';
import { InputRangeDirective } from './directives/input-range.directive';
import { InputUcfirstDirective } from './directives/input-ucfirst.directive';

export const formsLiteComponents: any[] = [FormComponent];

export const formsLiteEntryComponents: any[] = [
  FieldCheckboxComponent,
  FieldDateComponent,
  FieldEmptyWrapperComponent,
  FieldInputComponent,
  FieldInputMaskComponent,
  FieldInputRangeComponent,
  FieldInputUcfirstComponent,
  FieldRadioComponent,
  FieldSelectComponent,
  FieldTextareaComponent,
  FieldWrapperComponent
];

export const formsLiteDirectives: any[] = [FormHostDirective, InputMaskDirective, InputRangeDirective, InputUcfirstDirective];

export const formsLiteExportComponents: any[] = [FormComponent];
