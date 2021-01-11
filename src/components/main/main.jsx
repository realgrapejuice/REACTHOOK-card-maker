import React, { useState } from "react";
import Editor from "../editor/editor";
import Header from "../header/header";
import Viewer from "../Viewer/viewer";
import styles from "./main.module.css";

const Main = ({ authService }) => {
  const [editorStatus, setEditorStatus] = useState(false);
  const [viewerStatus, setViewerStatus] = useState(true);
  const [userData, setUserData] = useState([]);

  const addCard = (newData) => {
    setUserData((prevData) => {
      const cards = { ...prevData };
      cards[newData.id] = newData; // cards객체에 newData.id라는 이름으로 newData를 생성
      return cards;
    });
  };

  const deleteCard = (userData) => {
    setUserData((userCards) => {
      const cards = { ...userCards };
      delete cards[userData.id];
      return cards;
    });
  };

  return (
    <section className={styles.container}>
      <Header
        authService={authService}
        editorStatus={editorStatus}
        viewerStatus={viewerStatus}
        setEditorStatus={setEditorStatus}
        setViewerStatus={setViewerStatus}
      />
      {editorStatus && (
        <Editor userData={userData} addCard={addCard} deleteCard={deleteCard} />
      )}
      {viewerStatus && <Viewer userData={userData} />}
    </section>
  );
};

export default Main;
