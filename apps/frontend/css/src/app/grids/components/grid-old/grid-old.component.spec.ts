import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOldComponent } from './grid-old.component';

describe('GridOldComponent', () => {
  let component: GridOldComponent;
  let fixture: ComponentFixture<GridOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
