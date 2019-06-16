// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  FACEBOOK_APP_ID: '384040512188385',
  FACEBOOK: {
    API_BASE_URL: 'https://www.facebook.com/v3.3',
    APP_ID: '384040512188385',
  },
  INSTAGRAM: {
    API_BASE_URL: 'https://api.instagram.com',
    CLIENT_ID: 'b9c54fb466974d23b3f7c9161fb88a54',
    CLIENT_SECRET: 'INSTAGRAM_CLIENT_SECRET'
  },
  TWITTER: {
    API_BASE_URL: 'https://api.twitter.com',
    CONSUMER_KEY: '533loKQcj9HfJ3TyX9gCnBTa0',
    CONSUMER_SECRET: 'DX7wvXuu2fnZqd5YPj8sBp8zrWymH3x0FjPlydLJFm1F9ePof5'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
