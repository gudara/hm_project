// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const API_BASE_URL = "http://localhost:8888/api/";
export const environment = {
  production: false,
  API_URL: {
    STUDENT : {
      GET: `${API_BASE_URL}student`,
      GET_ALL : `${API_BASE_URL}students`,
      POST: `${API_BASE_URL}student`,
      PUT: `${API_BASE_URL}student`,
      DELETE: `${API_BASE_URL}student`,

    }
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
