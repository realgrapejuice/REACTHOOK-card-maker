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
      firstName: "SeungHoon",
      lastName: "HAN",
      company: "Kakaobank",
      position: "Frontend Developer",
      phone: "01050914397",
      mail: "realgrapejuice@gmail.com",
    },
    {
      id: 2,
      theme: "light",
      firstName: "Haejin",
      lastName: "PARK",
      company: "Syneos health",
      position: "Lv2",
      phone: "01065668874",
      mail: "poll4t@hanmail.net",
    },
    {
      id: 3,
      theme: "light",
      firstName: "Haejin",
      lastName: "PARK",
      company: "Syneos health",
      position: "Lv2",
      phone: "01065668874",
      mail: "poll4t@hanmail.net",
    },
  ]);
  const createAndUpdate = (userData) => {
    setUserData((cards) => {
      const updated = { ...cards };
      updated[userData.id] = userData;
      return updated;
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
        <Editor
          userData={userData}
          addCard={createAndUpdate}
          updateCard={createAndUpdate}
        />
      )}
      {viewerStatus && <Viewer userData={userData} />}
    </section>
  );
};

export default Main;
