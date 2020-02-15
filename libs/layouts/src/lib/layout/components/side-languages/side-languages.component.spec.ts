import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MockPipes } from 'ng-mocks';
import { of } from 'rxjs';

import { LanguageLabelPipe } from '@medium-stories/shared';
import { TranslationFacade } from '@medium-stories/translation';

import { TranslatePipe } from '@ngx-translate/core';
import { SideLanguagesComponent } from './side-languages.component';

describe('SideLanguagesComponent', () => {
  let component: SideLanguagesComponent;
  let fixture: ComponentFixture<SideLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgSelectModule],
      declarations: [SideLanguagesComponent, MockPipes(LanguageLabelPipe, TranslatePipe)],
      providers: [
        {
          provide: TranslationFacade,
          useValue: {
            currentLanguage$: of(),
            languages$: of(),
            setLanguage: jest.fn()
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
