import { useState, useEffect } from "react";

import WarrantOfficerStripes from "./warrantOfficerStripes/WarrantOfficerStripes";

import styles from "./Header.module.css";

const Header = (props) => {
  const [headerPosition, setHeaderPosition] = useState("translateY(-20vh)");

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setHeaderPosition("translateY(0)");
    }, 150);
  }, []);

  return (
    <header className={styles.header} style={{ transform: headerPosition }}>
      <WarrantOfficerStripes />

      <div className={styles.titleDiv}>
        <h1 className={styles.mainTitle}>KEN JOHNSTON SOFTWARE</h1>
        <h2>FULL STACK DEVELOPER</h2>
      </div>
    </header>
  );
};

export default Header;
