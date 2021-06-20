import { useState, useEffect } from "react";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const [glowing, setGlowing] = useState(true);

  const darkLetters = { color: "gold", fontSize: "2rem" };

  const clickHandler = () => {
    props.chosen(props.title);
  };

  useEffect(()=> {
    const turnOffGlow = setTimeout(() => { setGlowing(false) }, 100)
  }, [])

  return (
    <h2
      onClick={clickHandler}
      className={styles.sideBarItem}
      style={glowing? darkLetters : null}
    >
      {props.title}
    </h2>
  );
};

export default MenuItem;
