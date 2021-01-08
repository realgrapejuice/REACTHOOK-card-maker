import React, { useState } from "react";
import Editor from "../editor/editor";
import Header from "../header/header";
import Viewer from "../Viewer/viewer";
import styles from "./main.module.css";

const Main = ({ authService }) => {
  const [editorStatus, setEditorStatus] = useState(false);
  const [viewerStatus, setViewerStatus] = useState(true);
  const [userData, setUserData] = useState([
    {
      id: 1,
      theme: "dark",
      name: "SeungHoon",
      company: "Kakaobank",
      position: "Frontend Developer",
      phone: "01050914397",
      mail: "realgrapejuice@gmail.com",
    },
    {
      id: 2,
      theme: "light",
      name: "Haejin",
      company: "Syneos health",
      position: "Lv2",
      phone: "01065668874",
      mail: "poll4t@hanmail.net",
    },
    {
      id: 3,
      theme: "light",
      name: "Haejin",
      company: "Syneos health",
      position: "Lv2",
      phone: "01065668874",
      mail: "poll4t@hanmail.net",
    },
  ]);

  const addCard = (newData) => {
    setUserData((prevData) => {
      const cards = { ...prevData };
      cards[newData.id] = newData; // cards객체에 newData.id라는 이름으로 newData를 생성
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
      {editorStatus && <Editor userData={userData} addCard={addCard} />}
      {viewerStatus && <Viewer userData={userData} />}
    </section>
  );
};

export default Main;
