import { useState, useContext } from "react";

import ProjectBox1 from "../projectBox1/ProjectBox1";
import styles from "./ProjectsPanel1.module.css";

import ProjectModal from "../projectModal/ProjectModal";
import AllImages from "../../../contexts/images-preload";

const ProjectsPanel1 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedProject, setClickedProject] = useState("");
  const { images } = useContext(AllImages);

  const projects = [
    {
      description:
        "An app which manages the seating rosters for an Orchestra. One front-end client is the dashboard for managing the personnel, including the relational database for concerts, the library, all players, and seating rosters for each performance. A second front-end is the player's view. A player can login, reply, and view relevant performing information.",
      frontImage: images.orchImage,
      transition: "1.5s",
      carousel: [
        images.playerEntry,
        images.possiblesTest,
        images.instrumentationForm,
        images.logShot,
        images.autoFillHook,
      ],
      location: "third",
      languages: "React, Java Spring Boot",
      link: "",
    },
    {
      description:
        "A collaboration with my friend Karin Samoviski. All animations and components are vanilla Javascript, and the back-end modeling and database are built in Java and Spring Boot. ",
      frontImage: images.skyPondImage,
      transition: "2s",
      carousel: [images.skyPond1, images.skyPond2, images.foneFormatter],
      location: "first",
      languages: "React, Java Spring Boot",
      link: "soon to be a link...",
    },
    {
      description:
        "An app designed for a genealogist. Perhaps your ancestor inherited land in 1750? Or was paid by the Continental Army per mile of marching? This will help you do a few necessary calculations with an unfamiliar currency.",
      frontImage: images.colonialImage,
      transition: "1.5s",
      carousel: [images.colonial1, images.colonial2, images.colonialCalculator],
      location: "second",
      languages: "Javascript, Java Spring Boot",
      link: "https://aqueous-ridge-03205.herokuapp.com/",
    },

    {
      description:
        "A full-stack database to manage foundation contributions and associated expenses for a local non-profit",
      frontImage: images.menorah2,
      transition: "2s",
      carousel: [images.menorah1],
      location: "fourth",
      languages: "React, Java, Spring Boot",
      link: "",
    },
  ];

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
