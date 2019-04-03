import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-double-slider-sign-overlay',
  templateUrl: './double-slider-sign-overlay.component.html',
  styleUrls: ['./double-slider-sign-overlay.component.css']
})
export class DoubleSliderSignOverlayComponent implements OnInit {

  overlayContainerActive = false;
  overlayActive = false;
  signInOverlayData: any;
  signUpOverlayData: any;
  leftPanelStyle = {transform: 'translateX(-20%)'};
  rightPanelStyle = {right: 0, transform: 'translateX(0)'};
  @Output() overlayActives: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.signInOverlayData = {
      type: 'sign-in',
      title: 'Welcome Back!',
      description: 'To keep connected with us please login with your personal info',
      buttonText: 'Sign In'
    };
    this.signUpOverlayData = {
      type: 'sign-up',
      title: 'Hello, Friend!',
      description: 'Enter your personal details and start journey with us',
      buttonText: 'Sign Up'
    };
  }

  changeOverlay(value) {
    console.log(value);
    this.leftPanelStyle = value.leftPanelStyle;
    this.rightPanelStyle = value.rightPanelStyle;
    this.overlayContainerActive = !this.overlayContainerActive;
    this.overlayActive = !this.overlayActive;
    this.overlayActives.emit();
  }

  ngOnInit() {
  }

}
