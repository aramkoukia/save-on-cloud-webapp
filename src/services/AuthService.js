import RestUtilities from './RestUtilities';
import AuthStore from '../stores/Auth';

export default class AuthService {
  static isSignedIn() {
    return !!AuthStore.getToken();
  }

  static getUser() {
    return AuthStore.getUser();
  }

  static register(email, password) {
    return RestUtilities.post(
      'auth/register',
      `email=${email}&password=${password}`,
    ).then((response) => response);
  }

  static signIn(email, password) {
    return RestUtilities.post(
      'auth/login',
      `email=${email}&password=${password}`,
    ).then((response) => {
      if (!response.is_error) {
        AuthStore.setToken(response.content.token);
        AuthStore.setUser(email);
        AuthStore.setUserPermissions(response.content.permissions);
      }
      return response;
    });
  }

  static userHasPermission(permission) {
    const permissions = AuthStore.getUserPermissions();
    return permissions ? permissions.includes(permission) : false;
  }

  static confirm(token) {
    return RestUtilities.post('auth/confirm', { token })
      .then(true)
      .catch(false);
  }

  static signOut() {
    AuthStore.removeToken();
    AuthStore.removeUser();
    window.location.replace('/?expired=1');
  }
}
