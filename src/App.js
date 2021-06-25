import { Fragment, useState, useEffect } from "react";

import Header from "./components/header/Header";
import PennyFarthing from "./components/pennyFarthing/PennyFarthing";
import SideBar from "./components/sideBar/SideBar";
import AboutPanel from './components/aboutPanel/AboutPanel';
import ContactFormPanel from "./components/contactFormPanel/ContactFormPanel";

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
  setStripesClicked(false)
}
     

  const stripesHandler = () => {
    setStripesClicked(!stripesClicked);
    console.log(stripesClicked)

    if (!stripesClicked) {
      setChoices(choiceObject);
    }

  
  };

  return (
    <Fragment>
      <Header stripesHandler={stripesHandler} stripesClicked={stripesClicked} />
      <SideBar menuList={menuList} choice={choiceHandler} visible={stripesClicked} />
      {bikeRiding && <PennyFarthing />}
      {choices['About Me'] && <AboutPanel />}
      {/* {choices['Current Projects'] && <ProjectsPanel />} */}
      {choices['Contact Me'] && <ContactFormPanel />}
    </Fragment>
  );
}

export default App;
