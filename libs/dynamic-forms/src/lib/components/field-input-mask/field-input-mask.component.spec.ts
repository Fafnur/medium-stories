import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';
import { MockDirectives, MockPipes } from 'ng-mocks';

import { formFieldInputMaskStub, formFieldWithOptionsStub, mockFieldComponentProps } from '../../../testing';
import { InputMaskDirective } from '../../directives/input-mask.directive';
import { FieldInputMaskComponent } from './field-input-mask.component';

describe('FieldInputMaskComponent', () => {
  let component: FieldInputMaskComponent;
  let fixture: ComponentFixture<FieldInputMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FieldInputMaskComponent, MockDirectives(InputMaskDirective), MockPipes(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInputMaskComponent);
    component = fixture.componentInstance;
    mockFieldComponentProps(component, { field: formFieldInputMaskStub });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
