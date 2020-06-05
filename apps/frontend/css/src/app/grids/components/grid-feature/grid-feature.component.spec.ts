import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { GridFeatureComponent } from './grid-feature.component';

describe('GridFeatureComponent', () => {
  let component: GridFeatureComponent;
  let fixture: ComponentFixture<GridFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridFeatureComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
