import { Fragment, useState, useEffect, useContext } from "react";

import { useMediaQuery } from "react-responsive";

import Header from "./components/header/Header";
import PennyFarthing from "./components/pennyFarthing/PennyFarthing";
import SideBar from "./components/sideBar/SideBar";
import AboutPanel from "./components/aboutPanel/AboutPanel";
import ContactFormPanel from "./components/contactFormPanel/ContactFormPanel";

import ProjectsPanel1 from "./components/projectsPanel/panel1/ProjectsPanel1";

import AllImages from "./contexts/images-preload";

import headShot from "./assets/headShot.JPG";

import orchImage from "./assets/orchestra-master/rosterSpots.jpg";

import skyPondImage from "./assets/skypond.jpg";
import skyPond1 from "./assets/skypond/skyPondSlide1.jpg";
import skyPond2 from "./assets/skypond/skyPondSlide2.jpg";
import foneFormatter from "./assets/skypond/skyPondPhoneFormatter.jpg";

import colonialImage from "./assets/colonialCurrencyShot.jpg";
import colonial1 from "./assets/colonial/ColonialCurrencySlide1.jpg";
import colonial2 from "./assets/colonial/colonialSlide2.jpg";
import colonialCalculator from "./assets/colonial/colonial-calculator4.jpg";

import menorah1 from "./assets/menorahPark/menorah1.jpg";
import menorah2 from "./assets/menorahPark/menorah2.jpg";

import playerEntry from "./assets/orchestra-master/playerEntry.jpg";
import possiblesTest from "./assets/orchestra-master/possiblesTest.jpg";
import instrumentationForm from "./assets/orchestra-master/instrumentation.jpg";
import autoFillHook from "./assets/orchestra-master/autoFill.jpg";
import logShot from "./assets/orchestra-master/orch-master-log.jpg";

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
  const [images, setImages] = useState({});

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  useEffect(() => {
    setTimeout(() => {
      setBikeRiding(false);
    }, 20000);

    setImages({
      headShot,
      orchImage,
      skyPondImage,
      skyPond1,
      skyPond2,
      foneFormatter,
      colonialImage,
      colonial1,
      colonial2,
      colonialCalculator,
      menorah1,
      menorah2,
      playerEntry,
      possiblesTest,
      instrumentationForm,
      autoFillHook,
      logShot,
    });
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
      <AllImages.Provider value={{ images }}>
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

          {clickedChoice === CURRENTPROJECTS && <ProjectsPanel1 />}

          {clickedChoice === CONTACT && <ContactFormPanel />}
        </Background>
      </AllImages.Provider>
    </Fragment>
  );
}

export default App;
