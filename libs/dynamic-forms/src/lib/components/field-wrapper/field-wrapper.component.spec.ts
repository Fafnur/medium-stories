import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipes } from 'ng-mocks';

import { formConfigStub, formFieldStub } from '../../../testing';
import { FieldWrapperComponent } from './field-wrapper.component';

describe('FieldWrapperComponent', () => {
  let component: FieldWrapperComponent;
  let fixture: ComponentFixture<FieldWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FieldWrapperComponent, MockPipes(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldWrapperComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl({});
    component.form = new FormGroup({});
    component.formConfig = formConfigStub;
    component.field = formFieldStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
