import React, { useState } from "react";
import styles from "./header.module.css";

const Header = ({ authService }) => {
  const [editorStatus, setEditorStatus] = useState(false);
  const [viewerStatus, setViewerStatus] = useState(true);

  const setEditorStyle = editorStatus
    ? `${styles.editor} ${styles.true}`
    : `${styles.editor} ${styles.false}`;

  const setViewerStyle = viewerStatus
    ? `${styles.viewer} ${styles.true}`
    : `${styles.viewer} ${styles.false}`;

  const clickEditor = () => {
    setEditorStatus(true);
    setViewerStatus(false);
  };

  const clickViewer = () => {
    setEditorStatus(false);
    setViewerStatus(true);
  };

  const handleSignOut = () => {
    authService.logOut();
  };

  return (
    <header className={styles.container}>
      <div className={styles.logoBox}>
        <span className={styles.logo}>
          <i className="fas fa-adjust"></i>
        </span>
        <h1 className={styles.title}>REMEMBER</h1>
      </div>
      <button className={styles.signOut} type="button" onClick={handleSignOut}>
        Sign-Out
      </button>
      <ul className={styles.ul}>
        <li>
          <button
            className={setEditorStyle}
            type="button"
            onClick={clickEditor}
          >
            Editor
          </button>
        </li>
        <li>
          <button
            className={setViewerStyle}
            type="button"
            onClick={clickViewer}
          >
            Viewer
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
