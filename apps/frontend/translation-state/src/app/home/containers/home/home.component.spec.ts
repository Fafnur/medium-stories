import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipe } from 'ng-mocks';

import { CookieStorage, MemoryStorage } from '@medium-stories/storage';
import { TranslationFacade } from '@medium-stories/translation';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [HomeComponent, MockPipe(TranslatePipe)],
      providers: [
        {
          provide: TranslationFacade,
          useValue: {
            setLanguage: jest.fn()
          }
        },
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
