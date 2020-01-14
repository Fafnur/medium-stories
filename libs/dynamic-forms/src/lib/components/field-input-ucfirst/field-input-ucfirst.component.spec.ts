import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipes } from 'ng-mocks';

import { mockFieldComponentProps } from '../../../testing';
import { FieldInputUcfirstComponent } from './field-input-ucfirst.component';

describe('FieldInputUcfirstComponent', () => {
  let component: FieldInputUcfirstComponent;
  let fixture: ComponentFixture<FieldInputUcfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FieldInputUcfirstComponent, MockPipes(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInputUcfirstComponent);
    component = fixture.componentInstance;
    mockFieldComponentProps(component);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
