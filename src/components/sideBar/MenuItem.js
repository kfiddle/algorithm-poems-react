import styles from "./MenuItem.module.css";

const MenuItem = (props) => {

  const clickHandler = () => {
    props.chosen(props.title);
  };

  return <h2 onClick={clickHandler} className={styles.sideBarItem}>{props.title}</h2>;
};

export default MenuItem;
