import React, { useState } from "react";
import Editor from "../editor/editor";
import Header from "../header/header";
import Viewer from "../Viewer/viewer";
import styles from "./main.module.css";

const Main = ({ authService }) => {
  const [editorStatus, setEditorStatus] = useState(false);
  const [viewerStatus, setViewerStatus] = useState(true);
  const [cards, setCards] = useState([
    {
      id: 1,
      firstName: "Seung Hoon",
      lastName: "HAN",
      company: "Kakaobank",
      position: "Frontend Developer",
      phone: "01050914397",
      mail: "realgrapejuice@gmail.com",
    },
    {
      id: 2,
      firstName: "Haejin",
      lastName: "PARK",
      company: "Syneos health",
      position: "Lv2",
      phone: "01065668874",
      mail: "poll4t@hanmail.net",
    },
  ]);
  return (
    <section className={styles.container}>
      <Header
        authService={authService}
        editorStatus={editorStatus}
        viewerStatus={viewerStatus}
        setEditorStatus={setEditorStatus}
        setViewerStatus={setViewerStatus}
      />
      {editorStatus && <Editor cards={cards} />}
      {viewerStatus && <Viewer cards={cards} />}
    </section>
  );
};

export default Main;
