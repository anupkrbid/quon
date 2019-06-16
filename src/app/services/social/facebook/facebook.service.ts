import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

const redirectUrl = window.location.origin + '/authorize/facebook';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor() { }

  signIn() {
    const api = environment.FACEBOOK.API_BASE_URL + '/dialog/oauth';
    const facebookAppId = environment.FACEBOOK.APP_ID;
    window.location.href = `${api}?client_id=${facebookAppId}&redirect_uri=${redirectUrl}&&state=state-param`;
  }
}
