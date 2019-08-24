import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents, MockDirective } from 'ng-mocks';

import { MsMobileDirective } from '@medium-stories/responsive';
import { SharedModule } from '@medium-stories/shared';

import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { SideToolsComponent } from '../../components/side-tools/side-tools.component';
import { BaseLayoutComponent } from './base-layout.component';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [
        BaseLayoutComponent,
        MockComponents(HeaderComponent, SidebarComponent, SideMenuComponent, SideToolsComponent),
        MockDirective(MsMobileDirective)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
