import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatIconModule } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MockComponent } from 'ng-mocks';

import { MsIconComponent } from '@medium-stories/shared';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [MatInputModule, MatIconModule, TranslateModule.forRoot()],
      declarations: [SearchComponent, MockComponent(MsIconComponent)],
      providers: [
        {
          provide: NgbModal,
          useValue: {
            open: jest.fn()
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
