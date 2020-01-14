import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FieldComponent, FormFieldInputMask } from '../../interfaces/form.interface';

@Component({
  selector: 'ms-field-input-mask',
  templateUrl: './field-input-mask.component.html',
  styleUrls: ['./field-input-mask.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldInputMaskComponent extends FieldComponent<FormFieldInputMask> {}
