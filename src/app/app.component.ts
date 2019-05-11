import { Component } from '@angular/core';

declare var FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socal-media-handler';
  onDashboard = false;
  constructor() {
    console.log('First blood');
  }

  connectWithFacebook() {
    console.log('connect with facebook');
    FB.getLoginStatus((response) => {
      this.statusChangeCallback(response);
    });
  }

  statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      this.testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      this.title =  'Please log ' + 'into this app.';
      this.logIntoFacebook();
    }
  }

  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', (response) => {
      console.log('Successful login for: ' + response.name);
      this.title = 'Thanks for logging in, ' + response.name + '!';
    });
  }

  logIntoFacebook() {
    FB.login((response) => {
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        this.connectWithFacebook();
      } else {
        // The person is not logged into this app or we are unable to tell.
      }
    });
  }

  postOnFb(text) {
    console.log(text);
  }
}
