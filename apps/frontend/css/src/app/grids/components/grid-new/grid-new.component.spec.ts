import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNewComponent } from './grid-new.component';

describe('GridNewComponent', () => {
  let component: GridNewComponent;
  let fixture: ComponentFixture<GridNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
