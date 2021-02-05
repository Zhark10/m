import { authorize, refresh, revoke } from "react-native-app-auth"

const config = {
  issuer: 'https://accounts.google.com',
  clientId: 'GOOGLE_OAUTH_APP_GUID.apps.googleusercontent.com',
  redirectUrl: 'com.googleusercontent.apps.GOOGLE_OAUTH_APP_GUID:/oauth2redirect/google',
  scopes: ['openid', 'profile']
}

const authState = async () => await authorize(config)

const refreshedState = async (authState) => await refresh(config, {
  refreshToken: authState.refreshToken
})

const revokeToken = async (refreshedState) => await revoke(config, {
  tokenToRevoke: refreshedState.refreshToken
})

export const GOOGLE_SERVICE = {
  authState,
  refreshedState,
  revokeToken,
  config,
}
