import { useState, useEffect, Fragment } from "react";

import MenuItem from "./MenuItem";
import HiddenDiv from "./HiddenDiv";

import styles from "./SideBar.module.css";

const SideBar = (props) => {
  const [sideBarVisible, setSideBarVisible] = useState(props.visible)
  const [sideBarPlace, setSideBarPlace] = useState(-25);
  const [hiddenDivSpot, setHiddenDivSpot] = useState(-20);
  const [hiddenDivAlive, setHiddenDivAlive] = useState(true);
  

  const [menu1, setMenu1] = useState("");
  const [menu2, setMenu2] = useState("");
  const [menu3, setMenu3] = useState("");

  const [options, setOptions] = useState(['', '', ''])

  const clicked = (choice) => {
    props.choice(choice);

  };

  const list = <MenuItem title={"About Me"} chosen={clicked} />;

  // useEffect(() => {
  //   const slideIn = setTimeout(() => {
  //     setSideBarPlace(10);
  //     setHiddenDivSpot(10);
  //   }, 350);

  //   const firstMenu = setTimeout(() => {
  //     setMenu1(<MenuItem title={props.menuList[0]} chosen={clicked} />);
  //   }, 1000);

  //   const secondMenu = setTimeout(() => {
  //     setMenu2(<MenuItem title={props.menuList[1]} chosen={clicked} />);
  //   }, 1300);

  //   const thirdMenu = setTimeout(() => {
  //     setMenu3(<MenuItem title={props.menuList[2]} chosen={clicked} />);
  //   }, 1600);  
   

  //   const vanishHiddenDiv = setTimeout(() => {
  //     setHiddenDivAlive(false);
  //   }, 1800);
  // }, []);

  const optionsPopIn = () => {
    const firstMenu = setTimeout(() => {
      setMenu1(<MenuItem title={props.menuList[0]} chosen={clicked} />);
    }, 1000);
  
    const secondMenu = setTimeout(() => {
      setMenu2(<MenuItem title={props.menuList[1]} chosen={clicked} />);
    }, 1300);
  
    const thirdMenu = setTimeout(() => {
      setMenu3(<MenuItem title={props.menuList[2]} chosen={clicked} />);
    }, 1600);  
  
  }


useEffect(()=> {

  if (props.visible) {
    optionsPopIn();

    setHiddenDivAlive(true);
    setTimeout(() => { setHiddenDivSpot(10)}, 100);
    
    setSideBarPlace(10);
  } else {
    setMenu1('');
    setMenu2('');
    setMenu3('');
    setSideBarPlace(-25);
    setHiddenDivAlive(false);
    setHiddenDivSpot(-20);
  }

}, [props.visible])



  const menuListToDisplay = props.menuList.map((menuItem) => (
    <MenuItem title={menuItem} chosen={clicked} key={Math.random()} />
  ));

  return (
    <Fragment>
      {hiddenDivAlive && <HiddenDiv placement={hiddenDivSpot} />}

      <div
        className={styles.sideBarDiv}
        style={{transform: `translateX(${sideBarPlace}vw)`}}
      >
        
        {menu1}
        {menu2}
        {menu3}
      </div>
    </Fragment>
  );
};

export default SideBar;
