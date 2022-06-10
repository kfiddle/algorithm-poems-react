import { useState, useEffect } from "react";
import styles from "./WarrantOfficerStripes.module.css";

const WarrantOfficerStripes = (props) => {
  const [counter, setCounter] = useState(0);

  const [bar1, setBar1] = useState("");
  const [bar2, setBar2] = useState("");
  const [bar3, setBar3] = useState("");

  const [spin, setSpin] = useState([0, 0, 0]);
  // const [barColors, setBarColors] = useState({
  //   bar1: "#5a1616",
  //   bar2: "#5a1616",
  //   bar3: "#5a1616",
  // });

  const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   const ourTimer = setInterval(() => {
  //     if (!props.stripesClicked) {
  //       if (counter < 2) {
  //         setCounter((previousCount) => previousCount + 1);
  //       } else {
  //         setCounter(0);
  //       }

  //       if (counter === 0) {
  //         setBarColors({ bar1: "gold", bar2: "#5a1616", bar3: "#5a1616" });
  //       } else if (counter === 1) {
  //         setBarColors({ bar1: "#5a1616", bar2: "gold", bar3: "#5a1616" });
  //       } else {
  //         setBarColors({ bar1: "#5a1616", bar2: "#5a1616", bar3: "gold" });
  //       }
  //     } else {
  //       setBarColors({ bar1: "#5a1616", bar2: "#5a1616", bar3: "#5a1616" });
  //     }
  //   }, 300);

  //   return () => clearInterval(ourTimer);
  // }, [props.stripesClicked, barColors, setBarColors, counter]);

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

    for (let j = 0; j < 3; j++) {
      setTimeout(() => {
        if (j === 0) {
          setSpin((previous) => [previous[j] + 0.5, previous[1], previous[2]]);
        } else if (j === 1) {
          setSpin((previous) => [previous[0], previous[j] + 0.5, previous[2]]);
        } else {
          setSpin((previous) => [previous[0], previous[1], previous[j] + 0.5]);
        }
      }, j * 70);
    }
  };

  const stripesClicked = () => {
    spinTheBars();
    props.stripesHandler();
  };

  return (
    <div
      className={styles.outerHamburger}
      onMouseEnter={() => {
        hovering(true);
      }}
      onMouseLeave={() => {
        hovering(false);
      }}
      onClick={stripesClicked}
    >
      <div className={styles.barsAndLabel}>
        <div className={styles.bars}>
          <span
            className={`${styles.bar} ${styles[bar1]}`}
            style={{
              top: "10px",
              transform: clicked ? `rotate(${spin[0]}turn)` : "",
              // backgroundColor: barColors.bar1,
            }}
          ></span>
          <span
            className={`${styles.bar} ${styles[bar2]}`}
            style={{
              top: "26px",
              transform: clicked ? `rotate(${spin[1]}turn)` : "",
              // backgroundColor: barColors.bar2,
            }}
          ></span>
          <span
            className={`${styles.bar} ${styles[bar3]}`}
            style={{
              top: "41px",
              transform: clicked ? `rotate(${spin[2]}turn)` : "",
              // backgroundColor: barColors.bar3,
            }}
          ></span>
        </div>
        <h3 className={styles.menuLabel}>HOME</h3>
      </div>
    </div>
  );
};

export default WarrantOfficerStripes;
