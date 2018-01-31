// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBc7NDyxJ_-38foYX4coxZ286_u0A8BDMA',
    authDomain: 'connect-try.firebaseapp.com',
    databaseURL: 'https://connect-try.firebaseio.com',
    projectId: 'connect-try',
    storageBucket: 'connect-try.appspot.com',
    messagingSenderId: '1022552347626'
  }
};
