import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsRunDirective } from './ms-run.directive';

@Component({
  template: `
    <ng-container *msRun="calc()">
      <h1 *ngIf="data">{{ data }}</h1>
    </ng-container>
  `
})
export class TestMsComponent {
  data = null;

  calc(): void {
    this.data = 'calcData';
  }
}

describe('MsRunDirective', () => {
  let component: TestMsComponent;
  let fixture: ComponentFixture<TestMsComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [TestMsComponent, MsRunDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return result msRun directive', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('calcData');
  });
});
