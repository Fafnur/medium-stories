import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MockPipe } from 'ng-mocks';
import { of } from 'rxjs';

import { LanguageLabelPipe } from '@medium-stories/shared';
import { TranslationFacade } from '@medium-stories/translation';

import { LanguagesComponent } from './languages.component';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [LanguagesComponent, MockPipe(LanguageLabelPipe)],
      providers: [
        {
          provide: TranslationFacade,
          useValue: {
            currentLanguage$: of('en'),
            languages$: of(['en'])
          }
        },
        {
          provide: NgbModal,
          useValue: {
            open: jest.fn()
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
