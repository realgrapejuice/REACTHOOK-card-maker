import React, { useRef, useState } from "react";
import styles from "./log-in.module.css";
import SignUp from "../sign_up/signUp";

const LogIn = ({ authService }) => {
  const [signUpStatus, setSignUpStatus] = useState(false);

  const mailRef = useRef();
  const passwordRef = useRef();

  const loginOutlinkEventHandler = (event) => {
    event.preventDefault();
    let provider;
    if (event.target.dataset.icon) {
      provider = event.target.dataset.icon;
    } else if (
      event.target.parentNode.dataset.icon === "google" ||
      event.target.parentNode.dataset.icon === "github"
    ) {
      provider = event.target.parentNode.dataset.icon;
    } else {
      provider = event.target.classList[1];
    }
    provider = provider.charAt(0).toUpperCase() + provider.slice(1);
    authService //
      .logInOutlink(provider)
      .then(console.log);
  };

  const loginMailEventHandler = (event) => {
    event.preventDefault();
    const mail = mailRef.current.value;
    const password = passwordRef.current.value;
    authService //
      .logInMail(mail, password);
    mailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const setSignUpTrue = () => {
    setSignUpStatus(true);
  };

  const setSignUpFalse = () => {
    setSignUpStatus(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.logIn}>
        <header>
          <h1>Business Card Maker</h1>
          <span>Easiest way to save business card</span>
        </header>
        <form onSubmit={loginMailEventHandler}>
          <input type="text" placeholder="E-mail" ref={mailRef} required />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <div className={styles.buttonBox}>
            <button
              className={styles.signUp}
              type="button"
              onClick={setSignUpTrue}
            >
              Sign-Up
            </button>
            <button className={styles.signIn} type="submit">
              Sign-In
            </button>
          </div>
        </form>
        <ul>
          <li
            className={`${styles.linkBtn} google`}
            onClick={loginOutlinkEventHandler}
          >
            <i className="fab fa-google"></i>
          </li>
          <li
            className={`${styles.linkBtn} github`}
            onClick={loginOutlinkEventHandler}
          >
            <i className="fab fa-github"></i>
          </li>
        </ul>
      </div>
      {signUpStatus && (
        <SignUp authService={authService} setSignUpFalse={setSignUpFalse} />
      )}
    </section>
  );
};

export default LogIn;
