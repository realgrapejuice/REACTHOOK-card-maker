import React, { useRef, useState } from "react";
import styles from "./editForm.module.css";

const EditForm = ({ card, updateCard, deleteCard }) => {
  const [status, setStatus] = useState(false);
  const removeBtnStyle = !status
    ? `${styles.messageBox} ${styles.hidden}`
    : `${styles.messageBox} ${styles.visible}`;

  const formRef = useRef();
  const themeRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const positionRef = useRef();
  const mailRef = useRef();
  const phoneRef = useRef();

  const { theme, name, company, position, mail, phone } = card;

  const toggleStatus = () => {
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  const onChange = (event) => {
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value, // card에 있는 currentTarget.name에 값을 변경하는 코드
    });
  };

  const onDelete = () => {
    deleteCard(card);
  };

  return (
    <>
      <form ref={formRef} className={styles.form}>
        <div className={styles.rowFirst}>
          <select
            ref={themeRef}
            className={styles.select}
            value={theme}
            name="theme"
            onChange={onChange}
            readOnly
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
            onChange={onChange}
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
            onChange={onChange}
            placeholder="Company"
          />
          <input
            ref={positionRef}
            className={styles.input}
            type="text"
            name="position"
            value={position}
            onChange={onChange}
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
            onChange={onChange}
            placeholder="E-Mail"
          />
          <input
            ref={phoneRef}
            className={styles.input}
            type="text"
            name="phone"
            value={phone}
            onChange={onChange}
            placeholder="Phone"
          />
        </div>
        <div className={styles.rowFourth}>
          <button type="submit" className={styles.button}>
            Save
          </button>
        </div>
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={toggleStatus}
        >
          <i className="fas fa-times-circle"></i>
        </button>
      </form>
      <div className={removeBtnStyle}>
        <p>Do you want to delete?</p>
        <span>If you erase your card, It can't be recover</span>
        <div className={styles.btnBox}>
          <button type="button" className={styles.yesBtn} onClick={onDelete}>
            <i className="fas fa-check-circle"></i>
          </button>
          <button type="button" className={styles.noBtn} onClick={toggleStatus}>
            <i className="fas fa-minus-circle"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditForm;
