import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipes } from 'ng-mocks';

import { formFieldWithOptionsStub, mockFieldComponentProps } from '../../../testing';
import { FieldTypeheadComponent } from './field-typehead.component';

describe('FieldTypeheadComponent', () => {
  let component: FieldTypeheadComponent;
  let fixture: ComponentFixture<FieldTypeheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NgbTypeaheadModule],
      declarations: [FieldTypeheadComponent, MockPipes(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTypeheadComponent);
    component = fixture.componentInstance;
    mockFieldComponentProps(component, { field: formFieldWithOptionsStub });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
