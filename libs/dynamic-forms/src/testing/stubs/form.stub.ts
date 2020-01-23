import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { FormConfig, FormField, FormFieldInputMask, FormFieldType, FormFieldWithOptions } from '../../lib/interfaces/form.interface';

export const formFieldStub: FormField = {
  key: 'code',
  type: FormFieldType.Input,
  label: 'recovery.fields.code',
  attrs: {
    type: 'text',
    placeholder: 'recovery.fields.code',
    id: 'RecoveryConfirmCode',
    name: 'data[Recovery][code]'
  },
  validators: [Validators.required, Validators.minLength(4)]
};

export const formFieldWithOptionsStub: FormFieldWithOptions = {
  key: 'recovery_type',
  type: FormFieldType.Radio,
  label: 'recovery.fields.recoveryType',
  attrs: {
    placeholder: 'recovery.fields.recoveryType',
    id: 'RecoveryMethod',
    name: 'data[Recovery][method]'
  },
  validators: [Validators.required],
  options: [
    {
      label: 'recovery.fields.recoverySelf',
      value: 'self'
    },
    {
      label: 'recovery.fields.recoveryWithPhone',
      value: 'sms'
    }
  ],
  defaultValue: 'self'
};

export const formFieldInputMaskStub: FormFieldInputMask = {
  key: 'contact',
  type: FormFieldType.InputMask,
  label: 'recovery.fields.phone',
  attrs: {
    type: 'text',
    placeholder: 'recovery.fields.phone',
    id: 'RecoveryContact',
    name: 'data[Recovery][contact]'
  },
  validators: [Validators.required, Validators.minLength(10)],
  maskOptions: {
    mask: ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
    prefix: '+7',
    guide: true,
    showMask: true,
    removeMaskChars: true
  }
};

export const formConfigStub: FormConfig = {
  id: 'recovery-confirm',
  fields: [
    formFieldStub,
    {
      key: 'new_password',
      type: FormFieldType.Input,
      label: 'recovery.fields.newPassword',
      attrs: {
        type: 'password',
        placeholder: 'recovery.fields.newPassword',
        id: 'RecoveryNewPassword',
        name: 'data[Recovery][password]'
      },
      validators: [
        Validators.required,
        Validators.pattern(/^\S*(?=\S{6,30})(?=\S*[a-zA-Zа-яА-ЯёЁ].*[a-zA-Zа-яА-ЯёЁ])(?=\S*[\d].*[\d])\S*$/)
      ],
      hide: (payload: { field: FormField; formControl: AbstractControl; formGroup: FormGroup }) => {
        return payload.formGroup.get('recovery_type').value !== 'self';
      }
    },
    {
      key: 'confirm_password',
      type: FormFieldType.Input,
      label: 'recovery.fields.confirmPassword',
      attrs: {
        type: 'password',
        placeholder: 'recovery.fields.confirmPassword',
        id: 'RecoveryConfirmPassword',
        name: 'data[Recovery][re_password]'
      },
      validators: [Validators.required],
      hide: (payload: { field: FormField; formControl: AbstractControl; formGroup: FormGroup }) => {
        return payload.formGroup.get('recovery_type').value !== 'self';
      }
    },
    {
      key: 'code',
      type: FormFieldType.Input,
      label: 'recovery.fields.code',
      attrs: {
        type: 'text',
        placeholder: 'recovery.fields.code',
        id: 'RecoveryConfirmCode',
        name: 'data[Recovery][code]'
      },
      validators: [Validators.required, Validators.minLength(4)]
    }
  ]
};
