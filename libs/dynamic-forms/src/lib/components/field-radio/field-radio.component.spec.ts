import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipes } from 'ng-mocks';

import { formFieldWithOptionsStub, mockFieldComponentProps } from '../../../testing';
import { FieldRadioComponent } from './field-radio.component';

describe('FieldRadioComponent', () => {
  let component: FieldRadioComponent;
  let fixture: ComponentFixture<FieldRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FieldRadioComponent, MockPipes(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldRadioComponent);
    component = fixture.componentInstance;
    mockFieldComponentProps(component, { field: formFieldWithOptionsStub });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
