import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  console.log(card);
  return <li>{card.id}</li>;
};

export default Card;
