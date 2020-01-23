import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipes } from 'ng-mocks';

import { mockFieldComponentProps } from '../../../testing';
import { FieldInputComponent } from './field-input.component';

describe('FieldInputComponent', () => {
  let component: FieldInputComponent;
  let fixture: ComponentFixture<FieldInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FieldInputComponent, MockPipes(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInputComponent);
    component = fixture.componentInstance;
    mockFieldComponentProps(component);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
