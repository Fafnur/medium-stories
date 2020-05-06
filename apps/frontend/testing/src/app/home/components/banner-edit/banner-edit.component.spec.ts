import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BannerEditComponent } from './banner-edit.component';

describe('BannerEditComponent', () => {
  let component: BannerEditComponent;
  let fixture: ComponentFixture<BannerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [BannerEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert hero name to Title Case', () => {
    const hostElement = fixture.nativeElement;
    const nameInput = hostElement.querySelector('input');
    const nameDisplay = hostElement.querySelector('h2');
    const newInputVal = 'quick BROWN fOx';
    nameInput.value = newInputVal;

    // dispatch a DOM event so that Angular learns of input value change.
    // use new Event utility function (not provided by Angular) for better browser compatibility
    nameInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(nameDisplay.textContent).toBe(newInputVal.toUpperCase());
  });
});
