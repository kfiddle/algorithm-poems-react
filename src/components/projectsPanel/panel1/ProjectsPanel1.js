import { useState } from "react";

import ProjectBox1 from "../projectBox1/ProjectBox1";
import styles from "./ProjectsPanel1.module.css";

import orchImage from "../../../assets/orchestra-master/rosterSpots.jpg";

import skyPondImage from "../../../assets/skypond.jpg";
import skyPond1 from "../../../assets/skypond/skyPondSlide1.jpg";
import skyPond2 from "../../../assets/skypond/skyPondSlide2.jpg";
import foneFormatter from "../../../assets/skypond/skyPondPhoneFormatter.jpg";

import colonialImage from "../../../assets/colonialCurrencyShot.jpg";

import colonial1 from '../../../assets/colonial/ColonialCurrencySlide1.jpg';
import colonial2 from '../../../assets/colonial/colonialSlide2.jpg';
import colonialCalculator from '../../../assets/colonial/colonial-calculator4.jpg';

import menorah1 from "../../../assets/menorahPark/menorah1.jpg";
import menorah2 from "../../../assets/menorahPark/menorah2.jpg";

import playerEntry from "../../../assets/orchestra-master/playerEntry.jpg";
import possiblesTest from "../../../assets/orchestra-master/possiblesTest.jpg";
import instrumentationForm from "../../../assets/orchestra-master/instrumentation.jpg";
import autoFillHook from "../../../assets/orchestra-master/autoFill.jpg";

import ProjectModal from "../projectModal/ProjectModal";

const projects = [
  {
    description:
      "An app which manages the seating rosters for an Orchestra. One front-end client is the dashboard for managing the personnel, including the relational database for concerts, the library, all players, and seating rosters for each performance. A second front-end is the player's view. A player can login, reply, and view relevant performing information.",
    frontImage: orchImage,
    transition: "1.5s",
    carousel: [playerEntry, possiblesTest, instrumentationForm, autoFillHook],
    location: "third",
    languages: "React, Java Spring Boot",
    link: "",
  },
  {
    description:
      "A collaboration with my friend Karin Samoviski. All animations and components are vanilla Javascript, and the back-end modeling and database are built in Java and Spring Boot. ",
    frontImage: skyPondImage,
    transition: "2s",
    carousel: [skyPond1, skyPond2, foneFormatter],
    location: "first",
    languages: "React, Java Spring Boot",
    link: "soon to be a link...",
  },
  {
    description:
      "An app designed for a genealogist. Perhaps your ancestor inherited land in 1750? Or was paid by the Continental Army per mile of marching? This will help you do a few necessary calculations with an unfamiliar currency.",
    frontImage: colonialImage,
    transition: "1.5s",
    carousel: [
      colonial1, colonial2, colonialCalculator
    ],
    location: "second",
    languages: "Javascript, Java Spring Boot",
    link: "https://aqueous-ridge-03205.herokuapp.com/",
  },

  {
    description:
      "A full-stack database to manage foundation contributions and associated expenses for a local non-profit",
    frontImage: menorah2,
    transition: "2s",
    carousel: [menorah1],
    location: "fourth",
    languages: "React, Java, Spring Boot",
    link: "",
  },
];

const ProjectsPanel1 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedProject, setClickedProject] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const modalClicked = (project) => {
    setModalOpen(true);
    setClickedProject(project);
  };

  const displayableProjects = projects.map((project) => (
    <ProjectBox1
      key={projects.indexOf(project)}
      project={project}
      clickHandler={modalClicked}
    />
  ));
  return (
    <div className={styles.outerContainer}>
      {displayableProjects}
      {modalOpen && (
        <ProjectModal closeModal={closeModal} whichProject={clickedProject} />
        // <ProjectModal1 closeModal={closeModal}>I am a test modal</ProjectModal1>
      )}
    </div>
  );
};

export default ProjectsPanel1;
