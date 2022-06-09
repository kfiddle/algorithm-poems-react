import { useState, useEffect } from "react";

import styles from "./ProjectBox1.module.css";

const ProjectBox1 = (props) => {
  const { description, frontImage, transition, languages } = props.project;
  const [position, setPosition] = useState(50);

  useEffect(() => {
    setPosition(0);
  }, []);

  return (
    <div
      className={styles.outerContainer}
      style={{
        backgroundImage: `url(${frontImage})`,
        transition: `${transition} cubic-bezier(0.4, 0, 0.4, 1)`,
        transform: `translateY(${position}rem)`,
      }}
    ></div>
  );
};

export default ProjectBox1;
