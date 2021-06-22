import { useState, useEffect, Fragment } from "react";

import headShot from "../../assets/headShot.JPG";

import styles from "./AboutPanel.module.css";

const AboutPanel = (props) => {
    const [leftCurtainPlace, setLeftCurtainPlace] = useState(-52);
    const [rightCurtainPlace, setRightCurtainPlace] = useState(70);

    useEffect(() => {
        setTimeout(() => {
            setLeftCurtainPlace(0);
            setRightCurtainPlace(0);
        }, 200)

    }, [])


  return (
    <Fragment>
      <div className={styles.headShotCurtain} style={{transform : leftCurtainPlace}}>
        <img src={headShot} className={styles.headShot}></img>
      </div>
      <div className={styles.storyCurtain} style={{transform : rightCurtainPlace}}>
        <div className={`${styles.storyBlock} ${styles.topThirdStory}`}>
          <h2>
            Until recently, I spent each day as a professional violin player
            immersed in a centuries-old world. I spent thousands of hours with a
            piece of technology built around the year 1800, and with it I
            explored a world of language and ideas stretching back even further.
            I used to joke that my analog brain couldn't function without pencil
            and paper.
          </h2>
        </div>
        <div className={`${styles.storyBlock} ${styles.middleThirdStory}`}>
          <h2>
            These days, I design websites from scratch. I love building my own
            front-end components and also connecting them to a back-end in
            Java...
          </h2>
        </div>
        <div className={`${styles.storyBlock} ${styles.bottomThirdStory}`}>
          <h2>
            ...and although like all the cool kids these days, I'm exploring as
            much as I can in libraries like React, let's not forget that
            front-end skill is still based in plain, old, vanilla Javascript.
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPanel;
