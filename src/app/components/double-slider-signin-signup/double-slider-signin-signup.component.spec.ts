import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSliderSigninSignupComponent } from './double-slider-signin-signup.component';

describe('DoubleSliderSigninSignupComponent', () => {
  let component: DoubleSliderSigninSignupComponent;
  let fixture: ComponentFixture<DoubleSliderSigninSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSliderSigninSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSliderSigninSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
