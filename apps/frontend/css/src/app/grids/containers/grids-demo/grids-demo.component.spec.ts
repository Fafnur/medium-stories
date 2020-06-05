import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsDemoComponent } from './grids-demo.component';

describe('GridsDemoComponent', () => {
  let component: GridsDemoComponent;
  let fixture: ComponentFixture<GridsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
