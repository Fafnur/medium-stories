import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { TranslatePipe } from '@ngx-translate/core';
import { MockDirectives, MockPipe } from 'ng-mocks';

import { MsLetDirective, MsRunDirective } from '@medium-stories/shared';
import { CookieStorage, MemoryStorage } from '@medium-stories/storage';
import { TranslationFacade } from '@medium-stories/translation';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [HomeComponent, MockDirectives(MsLetDirective, MsRunDirective), MockPipe(TranslatePipe)],
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
