import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var window: any;
declare var FB: any;

if (environment.production) {
  enableProdMode();
}

// Facebook Initialization
window.fbAsyncInit = () => {
  console.log( 'appId: ', environment.FACEBOOK_APP_ID);
  FB.init({
    appId: environment.FACEBOOK_APP_ID,
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v3.3'
  });
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
