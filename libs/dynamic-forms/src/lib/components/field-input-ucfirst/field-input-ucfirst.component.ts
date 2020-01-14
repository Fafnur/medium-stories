import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FieldComponent } from '../../interfaces/form.interface';

@Component({
  selector: 'ms-field-input-ucfirst',
  templateUrl: './field-input-ucfirst.component.html',
  styleUrls: ['./field-input-ucfirst.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldInputUcfirstComponent extends FieldComponent {}
