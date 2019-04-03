import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DoubleSliderSigninSignupComponent} from './components/double-slider-signin-signup/double-slider-signin-signup.component';
import {SigninSignupFormComponent} from './components/signin-signup-form/signin-signup-form.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF, faGoogle, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { DoubleSliderSignOverlayComponent } from './components/double-slider-sign-overlay/double-slider-sign-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    DoubleSliderSigninSignupComponent,
    SigninSignupFormComponent,
    DoubleSliderSignOverlayComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faFacebookF, faGoogle, faLinkedinIn);
  }
}
