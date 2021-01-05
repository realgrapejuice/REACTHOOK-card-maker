import React from "react";
import Card from "../card/card";
import styles from "./viewer.module.css";

const Viewer = ({ cards }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Viewer</h1>
      <ul className={styles.cardBox}>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </ul>
    </section>
  );
};

export default Viewer;
