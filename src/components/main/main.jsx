import React from "react";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = ({ authService }) => {
  return (
    <section className={styles.container}>
      <Header authService={authService} />
    </section>
  );
};

export default Main;
