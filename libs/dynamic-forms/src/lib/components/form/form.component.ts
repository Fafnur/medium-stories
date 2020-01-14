import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { FormHostDirective } from '../../directives/form-host.directive';
import { FormConstructor } from '../../interfaces/form-constructor.interface';
import { FormConfig, FormGroupField } from '../../interfaces/form.interface';

@Component({
  selector: 'ms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {
  /**
   * Subscription on form changes
   */
  private subscription = new Subscription();

  /**
   * Form config
   */
  formConfig!: FormConfig;

  /**
   * Form host
   */
  @ViewChild(FormHostDirective, { static: true }) formHost: FormHostDirective;

  /**
   * Form config
   */
  @Input() set config(formConfig: FormConfig) {
    this.formConfig = formConfig;
    if (this.form) {
      this.formConstructor.updateControls(this.formConfig, this.form, this.formHost.viewContainerRef);
    }
  }

  /**
   * Form
   */
  @Input() form: FormGroup;

  /**
   * Form changed
   */
  @Output() changed = new EventEmitter<object>();

  /**
   * Form created
   */
  @Output() created = new EventEmitter<object>();

  constructor(private formConstructor: FormConstructor) {}

  ngOnInit(): void {
    if (!this.form) {
      this.form = new FormGroup({});
    }
    this.formConstructor.registerControls(this.formConfig, this.form);
    this.formConstructor.renderControls(this.formConfig, this.form, this.formHost.viewContainerRef);

    this.formConfig.fields
      .filter(field => 'fields' in field && field.subForm != null)
      .forEach((field: FormGroupField) => {
        this.subscription.add(
          field.subForm.valueChanges.subscribe(value => {
            this.form.patchValue(value);
          })
        );
      });

    this.subscription.add(
      this.form.valueChanges.subscribe(data => {
        this.changed.emit(data);
        this.formConstructor.updateControls(this.formConfig, this.form, this.formHost.viewContainerRef);
      })
    );
    this.created.emit(this.form.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
