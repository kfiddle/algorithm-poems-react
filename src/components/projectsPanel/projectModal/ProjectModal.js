import { useState, useEffect } from "react";

import styles from "./ProjectModal.module.css";

const ProjectModal = (props) => {
  const [modalPlace, setModalPlace] = useState(100);

  const image = props.whichProject.carousel[0];

  const closeModal = () => {
    setModalPlace(100);
    setTimeout(() => {
      props.closeModal();
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setModalPlace(10);
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
      <div className={styles.innerModalDiv}>
        <div className={styles.descriptionDiv}>
          <h3 className={styles.descriptionText}>
            {props.whichProject.description}
          </h3>
        </div>
        <div className={styles.slideDiv}>
          <div className={styles.slideImageDiv}>
            <img src={image} className={styles.image}/>
          </div>

          <div
            className={`${styles.carousel_buttons} ${styles.arrow_left}`}
          ></div>
          <div
            className={`${styles.carousel_buttons} ${styles.arrow_right}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
