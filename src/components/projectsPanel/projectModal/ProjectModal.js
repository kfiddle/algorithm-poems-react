import { useState, useEffect } from "react";

import styles from "./ProjectModal.module.css";

const ProjectModal = (props) => {
  const [modalPlace, setModalPlace] = useState(100);
  const [slideIndex, setSlideIndex] = useState(0);

  const {description, carousel, location, languages, link} = props.whichProject;

  let image = carousel[slideIndex];

  const moveSlides = (direction) => {
    let length = carousel.length;

    if (direction === "forward") {
      slideIndex === length - 1
        ? setSlideIndex(0)
        : setSlideIndex(slideIndex + 1);
    } else {
      slideIndex === 0
        ? setSlideIndex(length - 1)
        : setSlideIndex(slideIndex - 1);
    }

    image = carousel[slideIndex];
  };

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
            {description}
          </h3>
          <p className={styles.languagesText}>{languages}</p>
          <p className={styles.linkText}>{link}</p>
        </div>
        <div className={styles.slideDiv}>
          <div className={styles.slideImageDiv}>
            <img src={image} className={styles.image} />
          </div>

          
        </div>
        <div
            className={`${styles.carousel_buttons} ${styles.arrow_left}`}
            onClick={() => {
              moveSlides("back");
            }}
          ></div>
          <div
            className={`${styles.carousel_buttons} ${styles.arrow_right}`}
            onClick={() => {
              moveSlides("forward");
            }}
          ></div>
      </div>
    </div>
  );
};

export default ProjectModal;
