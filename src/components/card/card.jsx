import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const cardStyle =
    card.theme === "dark"
      ? `${styles.card} ${styles.dark}`
      : `${styles.card} ${styles.light}`;
  return (
    <li className={cardStyle}>
      <span className={styles.photo}>
        <img
          className={styles.profile}
          src="../image/sample-image.jpg"
          alt="#"
        />
      </span>
      <div className={styles.name}>
        <span className={styles.name}>{card.name}</span>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.info}>
          <span className={styles.icon}>
            <i className="far fa-building"></i>
          </span>
          <span className={styles.company}>{card.company}</span>
        </div>
        <div className={styles.info}>
          <span className={styles.icon}>
            <i className="far fa-user"></i>
          </span>
          <span className={styles.position}>{card.position}</span>
        </div>
        <div className={styles.info}>
          <span className={styles.icon}>
            <i className="fas fa-mobile"></i>
          </span>
          <span className={styles.phone}>{card.phone}</span>
        </div>
        <div className={styles.info}>
          <span className={styles.icon}>
            <i className="far fa-envelope-open"></i>
          </span>
          <span className={styles.mail}>{card.mail}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
