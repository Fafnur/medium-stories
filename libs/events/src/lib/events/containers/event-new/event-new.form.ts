import { Validators } from '@angular/forms';

import { FormConfig, FormFieldType } from '@medium-stories/dynamic-forms';

import { EventNewFieldWrapperComponent } from '../../components/event-new-field-wrapper/event-new-field-wrapper.component';

export const eventFormConfig: FormConfig = {
  id: 'new-event',
  wrapper: EventNewFieldWrapperComponent,
  fields: [
    {
      key: 'title',
      type: FormFieldType.Input,
      label: 'events.fields.title',
      attrs: {
        type: 'text',
        id: 'event-title',
        name: 'event[title]',
        placeholder: 'events.fields.title'
      },
      validators: [Validators.required, Validators.minLength(5)]
    },
    {
      key: 'place',
      type: FormFieldType.Input,
      label: 'events.fields.place',
      attrs: {
        type: 'text',
        id: 'event-place',
        name: 'event[place]',
        placeholder: 'events.fields.place'
      },
      validators: [Validators.required]
    },
    {
      key: 'body',
      type: FormFieldType.Textarea,
      label: 'events.fields.body',
      attrs: {
        type: 'text',
        id: 'event-body',
        name: 'event[body]',
        placeholder: 'events.fields.body'
      },
      validators: [Validators.required, Validators.minLength(50)]
    },
    {
      key: 'owner',
      type: FormFieldType.Select,
      label: 'events.fields.owner',
      attrs: {
        id: 'event-owner',
        name: 'event[owner]',
        placeholder: 'events.fields.owner'
      },
      autoSelect: true,
      options: [{ label: 'Super Admin', value: 1 }],
      validators: [Validators.required]
    },
    {
      key: 'published',
      type: FormFieldType.Checkbox,
      label: 'events.fields.published',
      attrs: {
        id: 'event-published',
        name: 'event[published]'
      },
      defaultValue: true,
      validators: []
    }
  ]
};
