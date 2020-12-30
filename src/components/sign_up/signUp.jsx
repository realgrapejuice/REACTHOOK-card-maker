import React, { useRef } from "react";
import styles from "./signUp.module.css";

const SignUp = ({ authService, setSignUpFalse }) => {
  const mailRef = useRef();
  const passwordRef = useRef();

  const handleCreateID = (event) => {
    event.preventDefault();
    const mail = mailRef.current.value;
    const password = passwordRef.current.value;
    authService //
      .createAccount(mail, password);
    mailRef.current.value = "";
    passwordRef.current.value = "";
    setSignUpFalse();
  };

  return (
    <section className={styles.signUpBox}>
      <button className={styles.clear} type="button" onClick={setSignUpFalse}>
        <i className="fas fa-times"></i>
      </button>
      <span>
        Make Account!
        <br /> All Services are 'FREE'
      </span>
      <form className={styles.signUpForm} onSubmit={handleCreateID}>
        <input
          className={styles.mail}
          type="email"
          placeholder="E-mail"
          ref={mailRef}
          required
        />
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <button className={styles.submit} type="submit">
          Create Account
        </button>
      </form>
    </section>
  );
};

export default SignUp;
