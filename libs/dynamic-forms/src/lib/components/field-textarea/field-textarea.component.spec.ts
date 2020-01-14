import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipes } from 'ng-mocks';

import { formFieldStub, mockFieldComponentProps } from '../../../testing';
import { FieldTextareaComponent } from './field-textarea.component';

describe('FieldTextareaComponent', () => {
  let component: FieldTextareaComponent;
  let fixture: ComponentFixture<FieldTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FieldTextareaComponent, MockPipes(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextareaComponent);
    component = fixture.componentInstance;
    mockFieldComponentProps(component, {
      field: {
        ...formFieldStub,
        attrs: {
          ...formFieldStub.attrs,
          cols: 2,
          rows: 2
        }
      }
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
