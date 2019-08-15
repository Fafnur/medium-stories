import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsLetDirective } from './ms-let.directive';

@Component({
  template: `
    <ng-container *msLet="let newVar of getNewVar()">
      <h1>{{ newVar }}</h1>
    </ng-container>
  `
})
export class TestMsComponent {
  getNewVar(): string {
    return 'tempVar';
  }
}

describe('MsLetDirective', () => {
  let component: TestMsComponent;
  let fixture: ComponentFixture<TestMsComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [TestMsComponent, MsLetDirective]
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

  it('should return result msLet directive', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('tempVar');
  });
});
