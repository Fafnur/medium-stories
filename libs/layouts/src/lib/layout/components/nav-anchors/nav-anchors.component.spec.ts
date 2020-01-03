import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { MockDirective, MockPipe } from 'ng-mocks';

import { MsLetDirective } from '@medium-stories/shared';

import { LayoutFacade } from '../../../layout-core/+state/layout.facade';
import { NAV_LINKS } from '../../layouts.tokens';
import { NavAnchorsComponent } from './nav-anchors.component';

describe('NavAnchorsComponent', () => {
  let component: NavAnchorsComponent;
  let fixture: ComponentFixture<NavAnchorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavAnchorsComponent, MockDirective(MsLetDirective), MockPipe(TranslatePipe)],
      providers: [
        {
          provide: LayoutFacade,
          useValue: {
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
    fixture = TestBed.createComponent(NavAnchorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
