import { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";

import bigWheel from "../../assets/bigWheel.png";
import pennyFrame from "../../assets/pennyFrame.png";
import smallWheel from "../../assets/smallWheel-01.png";

import deskStyles from "./DeskBike.module.css";
import phoneStyles from "./PhoneBike.module.css";

const PennyFarthing = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const styles = !isMobile ? deskStyles : phoneStyles;

  return (
    <div className={styles.bikeContainer}>
      <img src={smallWheel} className={styles.smallWheel}></img>
      <img src={pennyFrame} className={styles.pennyFrame}></img>
      <img src={bigWheel} className={styles.bigWheel}></img>
    </div>
  );
};

export default PennyFarthing;
