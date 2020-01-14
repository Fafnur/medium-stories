import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FieldComponent } from '../../interfaces/form.interface';

@Component({
  selector: 'ms-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldInputComponent extends FieldComponent {}
