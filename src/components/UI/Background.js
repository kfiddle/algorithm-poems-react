import styles from "./Background.module.css";

const Background = (props) => {
  const currentPanel = props.panel;

  return (
    <div
      className={styles.background}
      style={{ background: "linear-gradient(to Right, #cbd1d2, #07124d)" }}
    >
      {props.children}
    </div>
  );
};

export default Background;
