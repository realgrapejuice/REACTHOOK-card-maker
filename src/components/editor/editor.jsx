import React from "react";
import Card from "../card/card";
import AddForm from "../form/addForm";
import EditForm from "../form/editForm";
import styles from "./editor.module.css";

const Editor = ({ userData, addCard, deleteCard }) => {
  console.log(userData);
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Editor</h1>
      <main className={styles.formBox}>
        {Object.keys(userData).map((key) => (
          <EditForm
            key={key}
            card={userData[key]}
            updateCard={addCard}
            deleteCard={deleteCard}
          />
        ))}
        <AddForm addCard={addCard} />
      </main>
    </section>
  );
};

export default Editor;
