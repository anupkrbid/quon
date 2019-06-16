import { FacebookService } from './facebook/facebook.service';
import { TwitterService } from './twitter/twitter.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InstagramService } from './instagram/instagram.service';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(
    private facebookService: FacebookService,
    private instagramService: InstagramService,
    private twitterService: TwitterService
    ) { }

  signInWith(platform) {
    switch (platform) {
      case 'facebook': {
        return this.facebookService.signIn();
      }
      case 'instagram': {
        return this.instagramService.signIn();
      }
      case 'twitter': {
        return this.twitterService.signIn();
      }
      default: {
        return of(true);
      }
    }
  }


  getAccessTokenFrom(platform, data): Observable<any> {
    switch (platform) {
      case 'instagram': {
        // return this.instagramService.getAccessToken(data);
        return of(true);
      }
      case 'twitter': {
        // return this.twitterService.getAccessToken(data);
        return of(true);
      }
      default: {
        return of(true);
      }
    }
  }

}
