import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockDirective } from 'ng-mocks';

import { MsLetDirective } from '@medium-stories/shared';

import { LayoutFacade } from '../../+state/layout.facade';
import { NAV_LINKS } from '../../layouts.tokens';
import { NavSubmenuComponent } from './nav-submenu.component';

describe('NavSubmenuComponent', () => {
  let component: NavSubmenuComponent;
  let fixture: ComponentFixture<NavSubmenuComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      declarations: [NavSubmenuComponent, MockDirective(MsLetDirective)],
      providers: [
        {
          provide: LayoutFacade,
          useValue: {
            setNavSubItem: jest.fn()
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
