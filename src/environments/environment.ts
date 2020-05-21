// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//Added firebase configuration Jarkko Hämäläinen 1701558
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyDH8Gyubcj-LaoBYi--LTuhg_c-ycsuO60",
    authDomain: "cv-app-47aed.firebaseapp.com",
    databaseURL: "https://cv-app-47aed.firebaseio.com",
    projectId: "cv-app-47aed",
    storageBucket: "cv-app-47aed.appspot.com",
    messagingSenderId: "247715595825",
    appId: "1:247715595825:web:7576ae967b508cc749f710",
    measurementId: "G-ZE9W5THG2X"
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
