import styles from "./Background.module.css";


const Background = (props) => {
  const currentPanel = props.panel;
  const styleObject =
    currentPanel === "Current Projects"
      ? { background: "rgb(228, 225, 225)" }
      : {
          background: "linear-gradient(to Right, #cbd1d2, #787c92)",
        };

  return (
    <div className={styles.background} style={styleObject}>
      {props.children}
    </div>
  );
};

export default Background;
