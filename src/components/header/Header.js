import { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";

import WarrantOfficerStripes from "./warrantOfficerStripes/WarrantOfficerStripes";

import deskStyles from "./HeaderDesk.module.css";
import phoneStyles from "./HeaderPhone.module.css";

const Header = (props) => {
  const [headerPosition, setHeaderPosition] = useState("translateY(-30vh)");
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const panel = props.panel;


  const background = panel === "Current Projects" ? "white" : "transparent";
  const titleColor = panel === "Current Projects" ? "black" : "white";

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setHeaderPosition("translateY(0)");
    }, 2200);
  }, []);

  const stripesClicked = () => {
    props.stripesHandler();
  };

  const styles = !isMobile ? deskStyles : phoneStyles;

  return (
    <header
      className={styles.header}
      style={{ transform: headerPosition, background: background }}
    >
      <WarrantOfficerStripes
        stripesHandler={stripesClicked}
        stripesClicked={props.stripesClicked}
        panel={panel}
      />

      <div className={styles.titleDiv}>
        <h1 className={styles.mainTitle} style={{ color: titleColor }}>
          KEN JOHNSTON SOFTWARE
        </h1>
        <h2 className={styles.titleLetters} style={{ color: titleColor }}>
          FULL STACK DEVELOPER
        </h2>
      </div>
    </header>
  );
};

export default Header;
