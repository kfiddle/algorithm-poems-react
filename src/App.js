import { Fragment, useState, useEffect } from "react";

import Header from "./components/header/Header";
import PennyFarthing from "./components/pennyFarthing/PennyFarthing";
import SideBar from "./components/sideBar/SideBar";
import AboutPanel from './components/aboutPanel/AboutPanel';

import "./App.css";

const ABOUTME = 'About Me';
const CURRENTPROJECTS = 'Current Projects';
const CONTACT = 'Contact Me';

// const menuList = ["About Me", "Current Projects", "Contact Me"];
const menuList = [ABOUTME, CURRENTPROJECTS, CONTACT];

const choiceObject = {'About Me': false, 'Current Projects': false, 'Contact Me': false}

function App() {
  const [bikeRiding, setBikeRiding] = useState(true);
  const [stripesClicked, setStripesClicked] = useState(false);
  const [choices, setChoices] = useState(choiceObject);


  useEffect(() => {
    setTimeout(() => {
      setBikeRiding(false);
    }, 24000);
  }, []);

  const choiceHandler = (chosen) => {
    let tempChoices = { ...choiceObject};
    for (let choice in tempChoices) {
    if (choice === chosen) {
      tempChoices[choice] = true;
    }
  }
  setChoices(tempChoices);
  console.log(tempChoices)
}
     
  

  const stripesHandler = () => {
    setStripesClicked(true);
  };

  return (
    <Fragment>
      <Header stripesHandler={stripesHandler} />
      {stripesClicked && <SideBar menuList={menuList} choice={choiceHandler} />}
      {bikeRiding && <PennyFarthing />}
      {choices['About Me'] && <AboutPanel />}
    </Fragment>
  );
}

export default App;
