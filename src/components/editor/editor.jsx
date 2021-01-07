import React from "react";
import AddForm from "../form/addForm";
import EditForm from "../form/editForm";
import styles from "./editor.module.css";

const Editor = ({ userData, addCard }) => {
  console.log(userData);
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Editor</h1>
      {/* <ul className={styles.formBox}>
        {userData.map((card) => (
          <EditForm key={card.id} card={card} />
        ))}
      </ul> */}
      <AddForm addCard={addCard} />
    </section>
  );
};

export default Editor;
