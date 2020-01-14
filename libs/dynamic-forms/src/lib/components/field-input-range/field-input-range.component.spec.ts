import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockDirectives } from 'ng-mocks';

import { mockFieldComponentProps } from '../../../testing';
import { InputRangeDirective } from '../../directives/input-range.directive';
import { FieldInputRangeComponent } from './field-input-range.component';

describe('FieldInputRangeComponent', () => {
  let component: FieldInputRangeComponent;
  let fixture: ComponentFixture<FieldInputRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FieldInputRangeComponent, MockDirectives(InputRangeDirective)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInputRangeComponent);
    component = fixture.componentInstance;
    mockFieldComponentProps(component, { field: { rangeOptions: { min: 1, max: 2 } } });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
