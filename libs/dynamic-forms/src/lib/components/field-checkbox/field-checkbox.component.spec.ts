import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipes } from 'ng-mocks';

import { mockFieldComponentProps } from '../../../testing';
import { FieldCheckboxComponent } from './field-checkbox.component';

describe('FieldCheckboxComponent', () => {
  let component: FieldCheckboxComponent;
  let fixture: ComponentFixture<FieldCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FieldCheckboxComponent, MockPipes(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldCheckboxComponent);
    component = fixture.componentInstance;
    mockFieldComponentProps(component);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
