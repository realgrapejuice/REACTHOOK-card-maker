import React, { useRef } from "react";
import styles from "./editForm.module.css";

const EditForm = ({ card, addCard }) => {
  const formRef = useRef();
  const themeRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const positionRef = useRef();
  const mailRef = useRef();
  const phoneRef = useRef();

  const { theme, name, company, position, mail, phone } = card;
  return (
    <form ref={formRef} className={styles.form}>
      <div className={styles.rowFirst}>
        <select
          ref={themeRef}
          className={styles.select}
          value={theme}
          name="theme"
        >
          <option placeholder="light">light</option>
          <option placeholder="dark">dark</option>
        </select>
        <input
          ref={nameRef}
          className={styles.input}
          type="text"
          name="name"
          value={name}
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
          value={company}
          placeholder="Company"
        />
        <input
          ref={positionRef}
          className={styles.input}
          type="text"
          name="position"
          value={position}
          placeholder="Position"
        />
      </div>
      <div className={styles.rowThird}>
        <input
          ref={mailRef}
          className={styles.input}
          type="text"
          name="mail"
          value={mail}
          placeholder="E-Mail"
        />
        <input
          ref={phoneRef}
          className={styles.input}
          type="text"
          name="phone"
          value={phone}
          placeholder="Phone"
        />
      </div>
      <div className={styles.rowFourth}>
        <button type="submit" className={styles.button}>
          Save
        </button>
      </div>
    </form>
  );
};

export default EditForm;
