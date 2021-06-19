import { useState, useEffect } from "react";

import bigWheel from "../../assets/bigWheel.png";
import pennyFrame from "../../assets/pennyFrame.png";
import smallWheel from "../../assets/smallWheel-01.png";

import styles from "./PennyFarthing.module.css";

const PennyFarthing = (props) => {
  const [bikePlace, setBikePlace] = useState(-20);

  useEffect(() => {
    const openingRide = setTimeout(() => {
      setBikePlace(110);
    }, 150);
  }, []);

  return (
    <div
      className={styles.bikeContainer}
      style={{ transform: `translateX(${bikePlace}vw)` }}
    >
      <img src={smallWheel} className={styles.smallWheel}></img>
      <img src={pennyFrame} className={styles.pennyFrame}></img>
      <img src={bigWheel} className={styles.bigWheel}></img>
    </div>
  );
};

export default PennyFarthing;
