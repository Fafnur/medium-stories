import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslatePipe } from '@ngx-translate/core';
import { MockComponent, MockDirective, MockPipe } from 'ng-mocks';
import { of } from 'rxjs';

import { MsIconComponent, MsLetDirective } from '@medium-stories/shared';

import { LayoutFacade } from '../../+state/layout.facade';
import { NAV_LINKS } from '../../layouts.tokens';
import { SideMenuComponent } from './side-menu.component';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule],
      declarations: [SideMenuComponent, MockComponent(MsIconComponent), MockDirective(MsLetDirective), MockPipe(TranslatePipe)],
      providers: [
        {
          provide: LayoutFacade,
          useValue: {
            menu$: of(),
            closeSideMenu: jest.fn(),
            toggleNavItem: jest.fn()
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
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
