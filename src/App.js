import { Fragment, useState, useEffect } from "react";

import Header from "./components/header/Header";
import PennyFarthing from "./components/pennyFarthing/PennyFarthing";
import SideBar from "./components/sideBar/SideBar";
import AboutPanel from "./components/aboutPanel/AboutPanel";
import ContactFormPanel from "./components/contactFormPanel/ContactFormPanel";
import ProjectsPanel from "./components/projectsPanel/ProjectsPanel";

import ProjectsPanel1 from "./components/projectsPanel/panel1/ProjectsPanel1";

import "./App.css";
import Background from "./components/UI/Background";

const ABOUTME = "About Me";
const CURRENTPROJECTS = "Current Projects";
const CONTACT = "Contact Me";

const menuList = [ABOUTME, CURRENTPROJECTS, CONTACT];

const choiceObject = {
  "About Me": false,
  "Current Projects": false,
  "Contact Me": false,
};


function App() {
  const [bikeRiding, setBikeRiding] = useState(true);
  const [stripesClicked, setStripesClicked] = useState(false);
  const [choices, setChoices] = useState(choiceObject);

  const [clickedChoice, setClickedChoice] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setBikeRiding(false);
    }, 24000);
  }, []);

  const choiceHandler = (chosen) => {

    let tempChoices = { ...choiceObject };
    for (let choice in tempChoices) {
      if (choice === chosen) {
        tempChoices[choice] = true;
      }
    }
    setClickedChoice(chosen);
    setChoices(tempChoices);
    setStripesClicked(false);
  };

  const stripesHandler = () => {
    setStripesClicked(!stripesClicked);
    setClickedChoice('');

    if (!stripesClicked) {
      setChoices(choiceObject);
    }
  };

  return (
    <Fragment>
      <Background>
        <Header
          stripesHandler={stripesHandler}
          stripesClicked={stripesClicked}
        />
        <SideBar
          menuList={menuList}
          choice={choiceHandler}
          visible={stripesClicked}
        />
        {bikeRiding && <PennyFarthing />}

        {clickedChoice === ABOUTME && <AboutPanel />}

        {/* {choices['Current Projects'] && <ProjectsPanel />} */}
        {clickedChoice === CURRENTPROJECTS && <ProjectsPanel1 />}

        {clickedChoice === CONTACT && <ContactFormPanel />}

      </Background>
    </Fragment>
  );
}

export default App;
