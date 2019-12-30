import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, MockDirective } from 'ng-mocks';

import { MsMobileDirective } from '@medium-stories/responsive';

import { LogoComponent } from '../logo/logo.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { NavSubmenuComponent } from '../nav-submenu/nav-submenu.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [],
      declarations: [
        HeaderComponent,
        MockComponent(LogoComponent),
        MockComponent(NavMenuComponent),
        MockComponent(NavSubmenuComponent),
        MockComponent(ToolbarComponent),
        MockDirective(MsMobileDirective)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
