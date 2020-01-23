import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { FormHostDirective } from '../../directives/form-host.directive';
import { WrapperComponent } from '../../interfaces/form.interface';

@Component({
  selector: 'ms-field-empty-wrapper',
  templateUrl: './field-empty-wrapper.component.html',
  styleUrls: ['./field-empty-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldEmptyWrapperComponent extends WrapperComponent {
  /**
   * Form host
   */
  @ViewChild(FormHostDirective, { static: true }) formHost: FormHostDirective;
}
