import { useState, useEffect } from "react";
import useDetailSpeller from "../../hooks/useDetailSpeller";

import styles from "./ProjectBox.module.css";

const ProjectBox = (props) => {
  const [boxSpot, setBoxSpot] = useState(100);
  const [filter, setFilter] = useState("");
  const [hovered, setHovered] = useState(false);

  let clickForDeets = useDetailSpeller(hovered);

  const clickHandler = () => {
    props.clickHandler(props.whichBox);

  }

  const hoverGlow = (on) => {
    if (on) {
      setFilter("brightness(80%) hue-rotate(200deg) saturate(60%) invert(20%)");
      setHovered(true);
    } else {
      setFilter("");
      setHovered(false)
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setBoxSpot(0);
    }, 10);
  }, []);

  return (
    <div
      className={`${styles.projectBox} ${styles[props.whichBox]}`}
      style={{ transform: `translateY(${boxSpot}vh)`, filter: filter }}
      onMouseEnter={() => {
        hoverGlow(true);
      }}
      onMouseLeave={() => {
        hoverGlow(false);
      }}
      onClick={clickHandler}
    >
      <h2 className={styles.innerProjectHeader}>{clickForDeets}</h2>
    </div>
  );
};

export default ProjectBox;
