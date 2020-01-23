import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MockDirectives } from 'ng-mocks';

import { formConfigStub } from '../../../testing';
import { FormHostDirective } from '../../directives/form-host.directive';
import { FormConstructor } from '../../interfaces/form-constructor.interface';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormComponent, MockDirectives(FormHostDirective)],
      providers: [
        {
          provide: FormConstructor,
          useValue: {
            registerControls: jest.fn(),
            renderControls: jest.fn(),
            updateControls: jest.fn()
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({});
    component.formConfig = formConfigStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
