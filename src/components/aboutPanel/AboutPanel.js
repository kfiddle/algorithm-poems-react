import { useState, useEffect, Fragment } from "react";

import headShot from "../../assets/headShot.JPG";

import styles from "./AboutPanel.module.css";

const AboutPanel = (props) => {
    const [leftCurtainPlace, setLeftCurtainPlace] = useState(-52);
    const [rightCurtainPlace, setRightCurtainPlace] = useState(70);

    const [imageFilter, setImageFilter] = useState(300);
    const [leftCurtainOpacity, setLeftCurtainOpacity] = useState(0.2);

    useEffect(() => {
        setTimeout(() => {
            setLeftCurtainPlace(5);
            setRightCurtainPlace(0);
            
        }, 10)

        setTimeout(() => {
          setLeftCurtainOpacity(1.0);
          setImageFilter(100)
        }, 300)

    }, [])


  return (
    <Fragment>
      <div className={styles.headShotCurtain} style={{transform : `translateX(${leftCurtainPlace}vw)`, opacity: leftCurtainOpacity}}>
        <img src={headShot} className={styles.headShot} style={{filter: `brightness(${imageFilter}%)`}}></img>
      </div>
      <div className={styles.storyCurtain} style={{transform : `translateX(${rightCurtainPlace}vw)`}}>
        <div className={`${styles.storyBlock} ${styles.topThirdStory}`}>
          <p>
            Until recently, I spent each day as a professional violin player
            immersed in a centuries-old world. I spent thousands of hours with a
            piece of technology built around the year 1800, and with it I
            explored a world of language and ideas stretching back even further.
            I used to joke that my analog brain couldn't function without pencil
            and paper.
          </p>
        </div>
        <div className={`${styles.storyBlock} ${styles.middleThirdStory}`}>
          <p>
            These days, I design websites from scratch. I love building my own
            front-end components and also connecting them to a back-end in
            Java...
          </p>
        </div>
        <div className={`${styles.storyBlock} ${styles.bottomThirdStory}`}>
          <p>
            ...and although like all the cool kids these days, I'm exploring as
            much as I can in libraries like React, let's not forget that
            front-end skill is still based in plain, old, vanilla Javascript.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPanel;
