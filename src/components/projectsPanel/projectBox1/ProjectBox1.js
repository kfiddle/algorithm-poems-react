import { useState, useEffect } from "react";

import useDetailSpeller from "../../../hooks/useDetailSpeller";

import styles from "./ProjectBox1.module.css";

const ProjectBox1 = (props) => {
  const [filter, setFilter] = useState("");
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState(50);

  const { description, frontImage, transition, languages } = props.project;

  let clickForDeets = useDetailSpeller(hovered, "click for details", "");

  useEffect(() => {
    setPosition(0);
  }, []);

  const clickHandler = () => {
    props.clickHandler(props.project);
  };

  const hoverGlow = (on) => {
    if (on) {
      setFilter("brightness(80%) hue-rotate(200deg) saturate(60%) invert(20%)");
      setHovered(true);
    } else {
      setFilter("");
      setHovered(false);
    }
  };

  return (
    <div
      className={styles.outerContainer}
      style={{
        backgroundImage: `url(${frontImage})`,
        transition: `${transition} cubic-bezier(0.4, 0, 0.4, 1)`,
        transform: `translateY(${position}rem)`,
        filter: filter,
        backgroundPosition: "0 83%", //careful, this really only applies to sky pond, but it's not killing anything
      }}
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

export default ProjectBox1;
