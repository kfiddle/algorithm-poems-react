import { useState } from "react";
import styles from "./WarrantOfficerStripes.module.css";

const WarrantOfficerStripes = (props) => {
  const [bar1, setBar1] = useState("");
  const [bar2, setBar2] = useState("");
  const [bar3, setBar3] = useState("");

  const [spin1, setSpin1] = useState(0);
  const [spin2, setSpin2] = useState(0);
  const [spin3, setSpin3] = useState(0);

  const [clicked, setClicked] = useState(false);

  const hovering = (up) => {
    setTimeout(() => {
      if (!up) {
        setBar1("");
        setClicked(false);
      } else {
        setBar1("hover");
      }
    }, 50);

    setTimeout(() => {
      !up ? setBar2("") && setClicked(false) : setBar2("hover");
    }, 150);

    setTimeout(() => {
      !up ? setBar3("") && setClicked(false) : setBar3("hover");
    }, 250);
  };

  const spinTheBars = () => {
    setClicked(true);
    setTimeout(() => {
      setSpin1((previous) => previous + 0.5);
    }, 10);
    setTimeout(() => {
      setSpin2((previous) => previous + 0.5);
    }, 80);
    setTimeout(() => {
      setSpin3((previous) => previous + 0.5);
    }, 150);
  };

  return (
    <div
      className={styles.outerHamburger}
      onMouseEnter={() => {
        hovering(true);
      }}
      onMouseLeave={() => {
        hovering(false);
        console.log("yeppers");
      }}
      onClick={spinTheBars}
    >
      <div className={styles.bars}>
        <span
          className={`${styles.bar} ${styles[bar1]}`}
          style={{
            top: "10px",
            transform: clicked ? `rotate(${spin1}turn)` : "",
          }}
        ></span>
        <span
          className={`${styles.bar} ${styles[bar2]}`}
          style={{
            top: "26px",
            transform: clicked ? `rotate(${spin2}turn)` : "",
          }}
        ></span>
        <span
          className={`${styles.bar} ${styles[bar3]}`}
          style={{
            top: "41px",
            transform: clicked ? `rotate(${spin3}turn)` : "",
          }}
        ></span>
      </div>
    </div>
  );
};

export default WarrantOfficerStripes;
