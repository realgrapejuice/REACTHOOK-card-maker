import React from "react";
import Card from "../card/card";
import styles from "./viewer.module.css";

const Viewer = ({ userData }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Viewer</h1>
      <ul className={styles.cardBox}>
        {Object.keys(userData).map((key) => (
          <Card key={key} card={userData[key]} />
        ))}
      </ul>
    </section>
  );
};

export default Viewer;
