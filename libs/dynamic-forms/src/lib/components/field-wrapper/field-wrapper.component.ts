import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { FormHostDirective } from '../../directives/form-host.directive';
import { WrapperComponent } from '../../interfaces/form.interface';
import { extractTouchedChanges } from '../../utils/form-changes.util';

@Component({
  selector: 'ek-field-wrapper',
  templateUrl: './field-wrapper.component.html',
  styleUrls: ['./field-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldWrapperComponent extends WrapperComponent implements OnDestroy, OnInit {
  /**
   * Form host
   */
  @ViewChild(FormHostDirective, { static: true }) formHost: FormHostDirective;

  /**
   * Subscription
   */
  protected subscription = new Subscription();

  constructor(protected changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.subscription.add(
      extractTouchedChanges(this.formControl).subscribe(() => {
        this.changeDetectorRef.markForCheck();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getError(errors: { [key: string]: any }): string | null {
    const keys = Object.keys(errors);

    return keys.length ? keys.find(key => key !== 'required') : null;
  }

  getErrorLabel(error: string): string | null {
    const prefix = error && !isNaN(parseInt(error, 10)) ? '' : `${this.field.key}.`;

    return error ? `forms.validators.${prefix}${error}` : null;
  }
}
