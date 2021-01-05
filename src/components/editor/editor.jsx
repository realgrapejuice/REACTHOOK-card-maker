import React from "react";
import EditForm from "../form/editForm";
import styles from "./editor.module.css";

const Editor = ({ userData, addCard, updateCard }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Editor</h1>
      <ul className={styles.formBox}>
        {userData.map((card) => (
          <EditForm key={card.id} updateCard={updateCard} />
        ))}
      </ul>
    </section>
  );
};

export default Editor;
