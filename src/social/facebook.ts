import { environment } from './../environments/environment';

declare var window: any;
declare var FB: any;

// Facebook Initialization
window.fbAsyncInit = () => {
  console.log('Facebook appId: ', environment.FACEBOOK_APP_ID);
  FB.init({
    appId: environment.FACEBOOK_APP_ID,
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v3.3'
  });
};

// Load the SDK asynchronously
(function fbSdkLoad(d) {
  var js;
  var id = 'facebook-jssdk';
  var ref = d.getElementsByTagName('script')[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement('script');
  js.id = id;
  js.async = true;
  js.src = '//connect.facebook.net/en_US/all.js';
  ref.parentNode.insertBefore(js, ref);
})(document);
