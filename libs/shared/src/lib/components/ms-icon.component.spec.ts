import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { MsIconComponent } from './ms-icon.component';

describe('MsIconComponent', () => {
  let component: MsIconComponent;
  let fixture: ComponentFixture<MsIconComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [MsIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsIconComponent);
    component = fixture.componentInstance;
    component.icon = faSearch;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
