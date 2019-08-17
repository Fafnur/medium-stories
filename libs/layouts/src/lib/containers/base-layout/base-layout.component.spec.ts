import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent, MockDirective } from 'ng-mocks';

import { MsMobileDirective } from '@medium-stories/responsive';
import { SharedModule } from '@medium-stories/shared';

import { HeaderComponent } from '../../components/header/header.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { BaseLayoutComponent } from './base-layout.component';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [
        BaseLayoutComponent,
        MockComponent(HeaderComponent),
        MockComponent(SideMenuComponent),
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
