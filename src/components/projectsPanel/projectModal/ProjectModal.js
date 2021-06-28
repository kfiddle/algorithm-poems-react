import { useState, useEffect } from "react";

import styles from "./ProjectModal.module.css";

const ProjectModal = (props) => {
  const [modalPlace, setModalPlace] = useState(100);

  const closeModal = () => {
    setModalPlace(100);
    setTimeout(() => {
      props.closeModal();
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setModalPlace(20);
    }, 10);
  }, []);

  return (
    <div
      className={styles.projectModal}
      style={{ transform: `translateX(${modalPlace}vw)` }}
    >
      <button className={styles.xbutton} onClick={closeModal}>
        <h2>X</h2>
      </button>
      <h1>{props.whichProject}</h1>

      <div className={styles.carousel_buttons}>
        <div className={styles.arrow_left}></div>
        <div className={styles.arrow_right}></div>
      </div>
    </div>
  );
};

export default ProjectModal;
