import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockComponent, MockDirective } from 'ng-mocks';
import { of } from 'rxjs';

import { MsIconComponent, MsLetDirective } from '@medium-stories/shared';

import { LayoutFacade } from '../../+state/layout.facade';
import { NAV_LINKS } from '../../layouts.tokens';
import { NavSubmenuComponent } from './nav-submenu.component';

describe('NavSubmenuComponent', () => {
  let component: NavSubmenuComponent;
  let fixture: ComponentFixture<NavSubmenuComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule, TranslateModule.forRoot()],
      declarations: [NavSubmenuComponent, MockDirective(MsLetDirective), MockComponent(MsIconComponent)],
      providers: [
        {
          provide: LayoutFacade,
          useValue: {
            setNavSubItem: jest.fn(),
            hoveredNavItemByLevel$: jest.fn(() => of())
          }
        },
        {
          provide: NAV_LINKS,
          useValue: []
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
