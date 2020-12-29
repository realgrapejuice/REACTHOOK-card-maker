import React from "react";
import styles from "./log-in.module.css";

const LogIn = ({ authService }) => {
  const loginEventHandler = (event) => {
    event.preventDefault();
    let provider;
    if (event.target.dataset.icon) {
      provider = event.target.dataset.icon;
      console.log(provider);
    } else if (
      event.target.parentNode.dataset.icon === "google" ||
      event.target.parentNode.dataset.icon === "github"
    ) {
      provider = event.target.parentNode.dataset.icon;
      console.log(provider);
    } else {
      provider = event.target.classList[1];
      console.log(provider);
    }
  };
  return (
    <section className={styles.container}>
      <div className={styles.logIn}>
        <header>
          <h1>Business Card Maker</h1>
          <span>Easiest way to save business card</span>
        </header>
        <form>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <div className={styles.buttonBox}>
            <button className={styles.signUp} type="button">
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
            onClick={loginEventHandler}
          >
            <i className="fab fa-google"></i>
          </li>
          <li
            className={`${styles.linkBtn} github`}
            onClick={loginEventHandler}
          >
            <i className="fab fa-github"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LogIn;
