import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-signin-signup-form',
  templateUrl: './signin-signup-form.component.html',
  styleUrls: ['./signin-signup-form.component.css']
})
export class SigninSignupFormComponent implements OnInit {
  @Input() signIn: boolean;
  @Input() signUp: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
