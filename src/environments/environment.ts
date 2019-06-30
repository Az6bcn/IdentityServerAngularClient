// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getClientSettings: {
      authority: 'http://localhost:5000', // AuthServer URL, Identity Server URL (OIDC/OAuth2 provider)
      client_id: 'AngularClientApp', // client id as registered with Identity Server i.e OIDC/OAuth2 provider.
      redirect_uri: 'http://localhost:4200/auth-callback', // The redirect URI of this client application to receive a response from Identity Server i.e OIDC/OAuth2 provider.
      response_type: 'id_token token', // The type of response desired from Identity Server i.e OIDC/OAuth2 provider.
      post_logout_redirect_uri: 'http://localhost:4200/',
      filterProtocolClaims: false,
      loadUserInfo: true,
      automaticSilentRenew: true,
      scope: 'openid profile email userrole api.read' // Scopes being requested from Identity Server i.e OIDC/OAuth2 provider.
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
