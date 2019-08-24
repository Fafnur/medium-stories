import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { SideLanguagesComponent } from '../side-languages/side-languages.component';
import { SideSearchComponent } from '../side-search/side-search.component';
import { SideToolsComponent } from './side-tools.component';

describe('SideToolsComponent', () => {
  let component: SideToolsComponent;
  let fixture: ComponentFixture<SideToolsComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [SideToolsComponent, MockComponents(SideSearchComponent, SideLanguagesComponent)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
