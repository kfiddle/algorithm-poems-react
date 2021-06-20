import { useState, useEffect } from "react";

import MenuItem from "./MenuItem";

import styles from "./SideBar.module.css";

const SideBar = (props) => {
    const [sideBarPlace, setSideBarPlace] = useState(-25);


    useEffect(()=> {
        const slideIn = setTimeout(() => {
            setSideBarPlace(10);

        }, 150)


    }, [])

  const clicked = (choice) => {
    props.choice(choice);
  };

  const menuListToDisplay = props.menuList.map((menuItem) => (
    <MenuItem title={menuItem} chosen={clicked} key={Math.random()} />
  ));

  return <div className={styles.sideBarDiv} style={{transform: `translateX(${sideBarPlace}vw)`}}>{menuListToDisplay}</div>;
};

export default SideBar;
