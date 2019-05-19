import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const redirectUrl = window.location.origin + '/authorize/instagram';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private httpClient: HttpClient) { }

  signIn() {
    const api = environment.INSTAGRAM.API_BASE_URL + '/oauth/authorize';
    const instagramClientId = environment.INSTAGRAM.CLIENT_ID;
    // window.location.href = `${api}?client_id=${instagramClientId}&redirect_uri=${redirectUrl}&response_type=code`;
    window.location.href = `${api}?client_id=${instagramClientId}&redirect_uri=${redirectUrl}&response_type=token`;
  }

  // // Server Side Code
  // getAccessToken(code: string): Observable<any> {
  //   const api = environment.INSTAGRAM.API_BASE_URL + '/oauth/access_token';
  //   const instagramClientId = environment.INSTAGRAM.CLIENT_ID;
  //   const instagramClientSecret = environment.INSTAGRAM.CLIENT_SECRET;

  //   // const headers = new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded');
  //   const headers = new HttpHeaders().set('content-type', 'application/x-www-form-encoded');
  //   const params = new HttpParams().set('client_id', instagramClientId)
  //     .append('client_secret', instagramClientSecret)
  //     .append('redirect_uri', redirectUrl)
  //     .append('grant_type', 'authorization_code')
  //     .append('code', code);

  //   const config = { headers, params };
  //   return  this.httpClient.post(api, null, config);
  // }
}
