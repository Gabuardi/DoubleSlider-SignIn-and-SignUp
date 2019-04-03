import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSliderOverlayPanelComponent } from './double-slider-overlay-panel.component';

describe('DoubleSliderOverlayPanelComponent', () => {
  let component: DoubleSliderOverlayPanelComponent;
  let fixture: ComponentFixture<DoubleSliderOverlayPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSliderOverlayPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSliderOverlayPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
