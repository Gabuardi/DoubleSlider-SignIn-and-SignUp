import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSliderSignOverlayComponent } from './double-slider-sign-overlay.component';

describe('DoubleSliderSignOverlayComponent', () => {
  let component: DoubleSliderSignOverlayComponent;
  let fixture: ComponentFixture<DoubleSliderSignOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSliderSignOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSliderSignOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
