import React, { useRef } from "react";
import styles from "./addForm.module.css";

const AddForm = ({ addCard }) => {
  const formRef = useRef();
  const themeRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const positionRef = useRef();
  const mailRef = useRef();
  const phoneRef = useRef();

  const submitEventHandler = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      theme: themeRef.current.value || "",
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      position: positionRef.current.value || "",
      mail: mailRef.current.value || "",
      phone: phoneRef.current.value || "",
    };
    formRef.current.reset();
    addCard(card);
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={submitEventHandler}>
      <div className={styles.rowFirst}>
        <select ref={themeRef} className={styles.select} name="theme">
          <option placeholder="light">light</option>
          <option placeholder="dark">dark</option>
        </select>
        <input
          ref={nameRef}
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div className={styles.rowSecond}>
        <input
          ref={companyRef}
          className={styles.input}
          type="text"
          name="company"
          placeholder="Company"
        />
        <input
          ref={positionRef}
          className={styles.input}
          type="text"
          name="position"
          placeholder="Position"
        />
      </div>
      <div className={styles.rowThird}>
        <input
          ref={mailRef}
          className={styles.input}
          type="text"
          name="mail"
          placeholder="E-Mail"
        />
        <input
          ref={phoneRef}
          className={styles.input}
          type="text"
          name="phone"
          placeholder="Phone"
        />
      </div>
      <div className={styles.rowFourth}>
        <button type="submit" className={styles.button}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddForm;
