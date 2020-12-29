import { firebaseAuth, googleProvider, githubProvider } from "./reset_firebase";

class AuthService {
  logIn(providerName) {
    const authProvider = this.getAuthProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  getAuthProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw Error(`Not Supported Provider ${providerName}`);
    }
  }
}

export default AuthService;
