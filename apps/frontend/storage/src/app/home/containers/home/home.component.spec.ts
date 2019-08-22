import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieStorage, MemoryStorage } from '@medium-stories/storage';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: CookieStorage,
          useClass: MemoryStorage
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
