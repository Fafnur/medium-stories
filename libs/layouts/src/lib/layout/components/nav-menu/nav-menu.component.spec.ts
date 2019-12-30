import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { MockComponent, MockDirective, MockPipe } from 'ng-mocks';
import { of } from 'rxjs';

import { MsLetDirective } from '@medium-stories/shared';

import { LayoutFacade } from '../../../layout-core/+state/layout.facade';
import { NAV_LINKS } from '../../layouts.tokens';
import { NavAnchorsComponent } from '../nav-anchors/nav-anchors.component';
import { NavMenuComponent } from './nav-menu.component';

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavMenuComponent, MockComponent(NavAnchorsComponent), MockDirective(MsLetDirective), MockPipe(TranslatePipe)],
      providers: [
        {
          provide: LayoutFacade,
          useValue: {
            hoveredNavItemByLevel$: jest.fn(() => of()),
            setNavItem: jest.fn()
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
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
