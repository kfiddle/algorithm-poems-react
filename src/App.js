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

const ABOUTME = "ABOUT ME";
const CURRENTPROJECTS = "CURRENT PROJECTS";
const CONTACT = "CONTACT";

const menuList = [ABOUTME, CURRENTPROJECTS, CONTACT];

function App() {
  const [bikeRiding, setBikeRiding] = useState(true);
  const [stripesClicked, setStripesClicked] = useState(false);
  const [clickedChoice, setClickedChoice] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setBikeRiding(false);
    }, 24000);
  }, []);

  const choiceHandler = (chosen) => {
    setClickedChoice(chosen);
    setStripesClicked(false);
  };

  const stripesHandler = () => {
    setStripesClicked(!stripesClicked);
    setClickedChoice("");
  };

  return (
    <Fragment>
      <Background panel={clickedChoice}>
        <Header
          stripesHandler={stripesHandler}
          stripesClicked={stripesClicked}
          panel={clickedChoice}
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
