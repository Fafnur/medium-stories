import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipe } from 'ng-mocks';

import { SideSearchComponent } from './side-search.component';

describe('SideSearchComponent', () => {
  let component: SideSearchComponent;
  let fixture: ComponentFixture<SideSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatInputModule, MatIconModule],
      declarations: [SideSearchComponent, MockPipe(TranslatePipe)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
