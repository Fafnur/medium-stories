import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { FieldCheckboxComponent } from '../components/field-checkbox/field-checkbox.component';
import { FieldDateComponent } from '../components/field-date/field-date.component';
import { FieldEmptyWrapperComponent } from '../components/field-empty-wrapper/field-empty-wrapper.component';
import { FieldInputMaskComponent } from '../components/field-input-mask/field-input-mask.component';
import { FieldInputRangeComponent } from '../components/field-input-range/field-input-range.component';
import { FieldInputUcfirstComponent } from '../components/field-input-ucfirst/field-input-ucfirst.component';
import { FieldInputComponent } from '../components/field-input/field-input.component';
import { FieldRadioComponent } from '../components/field-radio/field-radio.component';
import { FieldSelectComponent } from '../components/field-select/field-select.component';
import { FieldTextareaComponent } from '../components/field-textarea/field-textarea.component';
import { FieldTypeheadComponent } from '../components/field-typehead/field-typehead.component';
import { FieldWrapperComponent } from '../components/field-wrapper/field-wrapper.component';
import { FormConstructor } from '../interfaces/form-constructor.interface';
import {
  FormConfig,
  FormField,
  FormFieldInputMask,
  FormFieldInputRange,
  FormFieldType,
  FormFieldWithOptions,
  FormFieldWrapperType,
  FormGroupField
} from '../interfaces/form.interface';

@Injectable()
export class BaseFormConstructor implements FormConstructor {
  /**
   * Is updating form config
   */
  private updating: { [key: string]: boolean } = {};

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  registerControls(formConfig: FormConfig, formGroup: FormGroup): void {
    // Create form fields
    formConfig.fields.forEach(field => {
      if ('fields' in field) {
        field.fields.forEach(inlineField => {
          this.createControl(inlineField, formGroup);
        });
      } else {
        this.createControl(field, formGroup);
      }
    });
    formConfig.refs = {};
  }

  renderControls(formConfig: FormConfig, formGroup: FormGroup, viewContainer: ViewContainerRef): void {
    // Create form components
    formConfig.fields.forEach(field => {
      if ('fields' in field) {
        if (typeof field.hide === 'function') {
          if (!field.hide({ fieldGroup: field, formControl: formGroup.get(field.key), formGroup })) {
            this.createGroupFieldComponent(field, formConfig, formGroup, viewContainer);
          } else {
            this.removeGroupFieldComponent(field, formConfig, formGroup, viewContainer);
          }
        } else {
          this.createGroupFieldComponent(field, formConfig, formGroup, viewContainer);
        }
      } else if (field.type !== FormFieldType.Hidden) {
        if (typeof field.hide === 'function') {
          if (!field.hide({ field, formControl: formGroup.get(field.key), formGroup })) {
            this.createFieldComponent(field, formConfig, formGroup, viewContainer);
          } else {
            this.removeFieldComponent(field, formConfig, formGroup, viewContainer);
          }
        } else {
          this.createFieldComponent(field, formConfig, formGroup, viewContainer);
        }
      }
    });
  }

  updateControls(formConfig: FormConfig, formGroup: FormGroup, viewContainer: ViewContainerRef): void {
    if (!this.updating[formConfig.id]) {
      this.updating[formConfig.id] = true;
      let index = 0;
      formConfig.fields.forEach(field => {
        if ('fields' in field) {
          if (typeof field.hide === 'function') {
            if (field.hide({ fieldGroup: field, formControl: formGroup.get(field.key), formGroup })) {
              this.removeGroupFieldComponent(field, formConfig, formGroup, viewContainer);
            } else {
              this.removeGroupFieldComponent(field, formConfig, formGroup, viewContainer);
              this.createGroupFieldComponent(field, formConfig, formGroup, viewContainer);
            }
          } else {
            index++;
          }
        } else {
          if (typeof field.hide === 'function') {
            if (field.hide({ field, formControl: !field.static ? formGroup.get(field.key) : null, formGroup })) {
              this.removeFieldComponent(field, formConfig, formGroup, viewContainer);
            } else {
              if (!formConfig.refs[field.key].wrapperRef) {
                if (!formGroup.get(field.key) && !field.static) {
                  this.createControl(field, formGroup);
                }
                this.createFieldComponent(field, formConfig, formGroup, viewContainer, index);
              }
              index++;
            }
          } else if (field.type !== FormFieldType.Hidden) {
            index++;
          }
        }
      });
      this.updating[formConfig.id] = false;
    }
  }

  /**
   * Set component properties
   * @param component ComponentRef
   * @param field Form field
   * @param formConfig Form config
   * @param formGroup Form group
   */
  setComponentProps(component: ComponentRef<any>, field: FormField, formConfig: FormConfig, formGroup: FormGroup): void {
    component.instance.field = field;
    component.instance.formConfig = formConfig;
    component.instance.form = formGroup;
    component.instance.formControl = !field.static ? formGroup.get(field.key) : new FormControl();
    if ('data' in field) {
      component.instance.data = field.data;
    }
  }

  /**
   * Set component properties
   * @param component ComponentRef
   * @param field Form group field
   * @param formConfig Form config
   * @param formGroup Form group
   * @param control AbstractControl
   */
  setGroupWrapperProps(
    component: ComponentRef<any>,
    field: FormGroupField,
    formConfig: FormConfig,
    formGroup: FormGroup,
    control: AbstractControl
  ): void {
    component.instance.field = field;
    component.instance.formConfig = formConfig;
    component.instance.form = formGroup;
    component.instance.formControl = control;
    component.instance.grouped = true;
  }

  /**
   * Create control
   * @param field Form field
   * @param formGroup Form group
   */
  private createControl(field: FormField | FormFieldWithOptions | FormFieldInputMask | FormFieldInputRange, formGroup: FormGroup) {
    if (!field.static && (typeof field.hide !== 'function' || !field.hide({ field, formControl: formGroup.get(field.key), formGroup }))) {
      let defaultValue = null;
      if (field.defaultValue != null) {
        defaultValue = field.defaultValue;
        if ('rangeOptions' in field) {
          field.rangeOptions.defaultValue = defaultValue;
        }
      }
      if (field.attrs == null) {
        field.attrs = {};
      }
      const control = new FormControl(defaultValue, field.validators);
      formGroup.registerControl(field.key, control);
    }
  }

  /**
   * Create field component and wrapper component
   * @param field Field config
   * @param formConfig Form config
   * @param formGroup Form group
   * @param viewContainer Parent view container
   * @param index Index
   */
  private createFieldComponent(
    field: FormField,
    formConfig: FormConfig,
    formGroup: FormGroup,
    viewContainer: ViewContainerRef,
    index?: number
  ): void {
    const wrapperRef = this.getWrapperComponent(field, formConfig, viewContainer, index);
    const fieldRef = this.getComponent(field, formConfig, wrapperRef.instance.formHost.viewContainerRef);

    this.setComponentProps(wrapperRef, field, formConfig, formGroup);
    this.setComponentProps(fieldRef, field, formConfig, formGroup);
  }

  /**
   * Remove field component and wrapper component
   * @param viewContainer Parent view container
   * @param field Field config
   * @param formConfig Form config
   * @param formGroup Form group
   */
  private removeFieldComponent(
    field: FormField | FormGroupField,
    formConfig: FormConfig,
    formGroup: FormGroup,
    viewContainer: ViewContainerRef
  ): void {
    if (!formConfig.refs[field.key]) {
      formConfig.refs[field.key] = { wrapperRef: null, fieldRef: null };
    }
    if (formConfig.refs[field.key].wrapperRef) {
      const indexRef = viewContainer.indexOf(formConfig.refs[field.key].wrapperRef.hostView);
      viewContainer.remove(indexRef);
      formConfig.refs[field.key].wrapperRef = null;
      formConfig.refs[field.key].fieldRef = null;
      if (!field['static']) {
        formGroup.removeControl(field.key);
      }
    }
  }

  /**
   * Remove field group component and wrapper component
   * @param viewContainer Parent view container
   * @param field Field config
   * @param formConfig Form config
   * @param formGroup Form group
   */
  private removeGroupFieldComponent(
    field: FormGroupField,
    formConfig: FormConfig,
    formGroup: FormGroup,
    viewContainer: ViewContainerRef
  ): void {
    this.removeFieldComponent(field, formConfig, formGroup, viewContainer);
    field.fields.forEach(inlineField => formGroup.removeControl(inlineField.key));
  }

  /**
   * Remove field component and wrapper component
   * @param viewContainer Parent view container
   * @param field Field config
   * @param formConfig Form config
   * @param formGroup Form group
   */
  private removeGroupInlineFieldComponent(
    field: FormField,
    formConfig: FormConfig,
    formGroup: FormGroup,
    viewContainer: ViewContainerRef
  ): void {
    if (!formConfig.refs[field.key]) {
      formConfig.refs[field.key] = { wrapperRef: null, fieldRef: null };
    }
    if (formConfig.refs[field.key].fieldRef) {
      const indexRef = viewContainer.indexOf(formConfig.refs[field.key].wrapperRef.hostView);
      viewContainer.remove(indexRef);
      formConfig.refs[field.key].wrapperRef = null;
      formConfig.refs[field.key].fieldRef = null;
      formGroup.removeControl(field.key);
    }
  }

  /**
   * Create field component and wrapper component
   * @param viewContainer Parent view container
   * @param field Field config
   * @param formConfig Form config
   * @param formGroup Form group
   * @param index Index
   */
  private createGroupFieldComponent(
    field: FormGroupField,
    formConfig: FormConfig,
    formGroup: FormGroup,
    viewContainer: ViewContainerRef,
    index?: number
  ): void {
    const wrapperRef = this.getWrapperComponent(field, formConfig, viewContainer);
    const wrapperViewContainerRef = wrapperRef.instance.formHost.viewContainerRef;

    const controls = {};
    field.fields.forEach(inlineField => {
      if (!formGroup.get(field.key)) {
        this.createControl(inlineField, formGroup);
      }
      if (typeof inlineField.hide === 'function') {
        if (!inlineField.hide({ field: inlineField, formControl: formGroup.get(field.key), formGroup, fieldGroup: field })) {
          const fieldRef = this.getComponent(inlineField, formConfig, wrapperViewContainerRef);
          this.setComponentProps(fieldRef, inlineField, formConfig, formGroup);
          controls[inlineField.key] = formGroup.get(inlineField.key);
        } else {
          this.removeGroupInlineFieldComponent(inlineField, formConfig, formGroup, wrapperViewContainerRef);
        }
      } else {
        const fieldRef = this.getComponent(inlineField, formConfig, wrapperViewContainerRef);
        this.setComponentProps(fieldRef, inlineField, formConfig, formGroup);
        controls[inlineField.key] = formGroup.get(inlineField.key);
      }
    });
    field.subForm = new FormGroup(controls);

    this.setGroupWrapperProps(wrapperRef, field, formConfig, formGroup, field.subForm);
  }

  /**
   * Return wrapper component ref
   * @param field Field config
   * @param formConfig Form config
   * @param viewContainer ViewContainer
   * @param index Index
   */
  private getWrapperComponent(
    field: FormField | FormGroupField,
    formConfig: FormConfig,
    viewContainer: ViewContainerRef,
    index?: number
  ): ComponentRef<any> {
    if (!formConfig.refs[field.key] || !formConfig.refs[field.key].wrapperRef) {
      if (!formConfig.refs[field.key]) {
        formConfig.refs[field.key] = {};
      }
      if (!formConfig.refs[field.key].wrapperRef) {
        // Create field wrapper component
        formConfig.refs[field.key].wrapperRef = viewContainer.createComponent(this.getWrapperComponentFactory(field, formConfig), index);
      }
    }

    return formConfig.refs[field.key].wrapperRef;
  }

  /**
   * Return component ref
   * @param field Field config
   * @param formConfig Form config
   * @param viewContainer ViewContainer
   * @param index Index
   */
  private getComponent(field: FormField, formConfig: FormConfig, viewContainer: ViewContainerRef, index?: number): ComponentRef<any> {
    if (!formConfig.refs[field.key] || !formConfig.refs[field.key].fieldRef) {
      if (!formConfig.refs[field.key]) {
        formConfig.refs[field.key] = {};
      }
      if (!formConfig.refs[field.key].fieldRef) {
        // Create field wrapper component
        formConfig.refs[field.key].fieldRef = viewContainer.createComponent(this.getFieldComponentFactory(field), index);
      }
    }

    return formConfig.refs[field.key].fieldRef;
  }

  /**
   * Return field component
   * @param field Field config
   */
  private getFieldComponentFactory(field: FormField): ComponentFactory<any> {
    let componentFactory;

    if (typeof field.type === 'string') {
      switch (field.type as FormFieldType) {
        case FormFieldType.Checkbox: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldCheckboxComponent);
          break;
        }
        case FormFieldType.Date: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldDateComponent);
          break;
        }
        case FormFieldType.Input: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldInputComponent);
          break;
        }
        case FormFieldType.InputMask: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldInputMaskComponent);
          break;
        }
        case FormFieldType.InputRange: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldInputRangeComponent);
          break;
        }
        case FormFieldType.InputUCFirst: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldInputUcfirstComponent);
          break;
        }
        case FormFieldType.Radio: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldRadioComponent);
          break;
        }
        case FormFieldType.Select: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldSelectComponent);
          break;
        }
        case FormFieldType.Textarea: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldTextareaComponent);
          break;
        }
        case FormFieldType.Typehead: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldTypeheadComponent);
          break;
        }
        default: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldInputComponent);
        }
      }
    } else {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(field.type);
    }

    return componentFactory;
  }

  /**
   * Return wrapper component
   * @param field Field config
   * @param formConfig Form config
   */
  private getWrapperComponentFactory(field: FormField | FormGroupField, formConfig: FormConfig): ComponentFactory<any> {
    let componentFactory;

    let type: string;
    if (typeof field.wrapper === 'string') {
      type = field.wrapper;
    } else if (typeof formConfig.wrapper === 'string') {
      type = formConfig.wrapper;
    }

    if (type) {
      switch (type as FormFieldWrapperType) {
        case FormFieldWrapperType.Default: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldWrapperComponent);
          break;
        }
        case FormFieldWrapperType.Empty: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldEmptyWrapperComponent);
          break;
        }
        case FormFieldWrapperType.None: {
          componentFactory = this.componentFactoryResolver.resolveComponentFactory(FieldEmptyWrapperComponent);
          break;
        }
      }
    } else {
      let typeComponent: Type<any>;
      if (field.wrapper && typeof field.wrapper !== 'string') {
        typeComponent = field.wrapper;
      } else if (formConfig.wrapper && typeof formConfig.wrapper !== 'string') {
        typeComponent = formConfig.wrapper;
      } else {
        typeComponent = FieldWrapperComponent;
      }

      componentFactory = this.componentFactoryResolver.resolveComponentFactory(typeComponent);
    }

    return componentFactory;
  }
}
