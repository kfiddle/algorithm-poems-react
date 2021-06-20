import { Fragment, useState, useEffect } from "react";

import Header from "./components/header/Header";
import PennyFarthing from "./components/pennyFarthing/PennyFarthing";
import SideBar from "./components/sideBar/SideBar";
import AboutPanel from "./components/aboutPanel/AboutPanel.js";

import "./App.css";

const menuList = ["About Me", "Current Projects", "Contact Me"];

let ABOUTME;
let CURRENTPROJECTS;
let CONTACT;

function App() {
  const [bikeRiding, setBikeRiding] = useState(true);
  const [stripesClicked, setStripesClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBikeRiding(false);
    }, 24000);
  });

  const choiceHandler = (choice) => {
    ABOUTME = choice === "About Me";
    CURRENTPROJECTS = choice === "Current Projects";
    CONTACT = choice === "Contact Me";

    console.log(CONTACT);
  };

  const stripesHandler = () => {
    setStripesClicked(true);
  };

  return (
    <Fragment>
      <Header stripesHandler={stripesHandler} />
      {stripesClicked && <SideBar menuList={menuList} choice={choiceHandler} />}
      {bikeRiding && <PennyFarthing />}
      {ABOUTME && <AboutPanel />}
    </Fragment>
  );
}

export default App;
