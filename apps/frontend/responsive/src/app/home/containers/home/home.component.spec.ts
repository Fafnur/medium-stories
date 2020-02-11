import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipes } from 'ng-mocks';

import { AdaptivePipe, AdaptiveSyncPipe } from '@medium-stories/responsive';
import { CookieStorage, MemoryStorage } from '@medium-stories/storage';
import { TranslationFacade } from '@medium-stories/translation';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [HomeComponent, MockPipes(AdaptivePipe, AdaptiveSyncPipe, TranslatePipe)],
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
