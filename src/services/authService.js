import { firebaseAuth, googleProvider, githubProvider } from "./reset_firebase";

class AuthService {
  logInOutlink(providerName) {
    const authProvider = this.getAuthProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logInMail(userMail, userPW) {
    firebaseAuth //
      .signInWithEmailAndPassword(userMail, userPW);
  }

  createAccount(userMail, userPW) {
    const user = userMail.split("@")[0];
    firebaseAuth //
      .createUserWithEmailAndPassword(userMail, userPW)
      .then(window.alert(`Account created successfully ${user}`));
  }

  logOut() {
    firebaseAuth.signOut();
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
