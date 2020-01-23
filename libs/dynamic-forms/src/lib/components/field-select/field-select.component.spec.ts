import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipes } from 'ng-mocks';

import { formFieldWithOptionsStub, mockFieldComponentProps } from '../../../testing';
import { FieldSelectComponent } from './field-select.component';

describe('FieldSelectComponent', () => {
  let component: FieldSelectComponent;
  let fixture: ComponentFixture<FieldSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FieldSelectComponent, MockPipes(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSelectComponent);
    component = fixture.componentInstance;
    mockFieldComponentProps(component, { field: formFieldWithOptionsStub });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
