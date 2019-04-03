import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-double-slider-overlay-panel',
  templateUrl: './double-slider-overlay-panel.component.html',
  styleUrls: ['./double-slider-overlay-panel.component.css']
})
export class DoubleSliderOverlayPanelComponent implements OnInit {

  @Input() overlayData: any;
  @Input() overlayPanelStyle: any;
  @Output() overlayButtonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  changeOverlayStyles() {
    if (this.overlayData.type === 'sign-in') {
      this.showSignUpForm();
    } else {
      this.showSignInForm();
    }
  }

  showSignUpForm() {
    this.overlayButtonClick.emit({
      leftPanelStyle: {transform: 'translateX(-20%)'},
      rightPanelStyle: {right: 0, transform: 'translateX(0%)'}
    });
  }

  showSignInForm() {
    this.overlayButtonClick.emit({
      leftPanelStyle: {transform: 'translateX(0)'},
      rightPanelStyle: {right: 0, transform: 'translateX(20%)'}
    });
  }

  ngOnInit() {
  }

}
