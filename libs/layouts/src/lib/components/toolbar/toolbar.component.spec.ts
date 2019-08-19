import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockComponents, MockDirective } from 'ng-mocks';

import { MsMobileDirective } from '@medium-stories/responsive';

import { HamburgerComponent } from '../hamburger/hamburger.component';
import { LanguagesComponent } from '../languages/languages.component';
import { SearchComponent } from '../search/search.component';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [
        ToolbarComponent,
        MockDirective(MsMobileDirective),
        MockComponents(HamburgerComponent, LanguagesComponent, SearchComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
