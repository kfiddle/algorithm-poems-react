import { useState, useEffect } from "react";

import ProjectBox from "./ProjectBox";
import ProjectModal from "./projectModal/ProjectModal";

import styles from "./ProjectsPanel.module.css";


const projects = [
    {
      description:
        "A collaboration with my friend Karin Samoviski. All animations and components are vanilla Javascript, and the back-end modeling and database are built in Java and Spring Boot. ",
      carousel: [
        "images/slides/skyPondSlide1.jpg",
        "images/slides/skyPondSlide2.jpg",
        "images/slides/skyPondPhoneFormatter.jpg",
      ],
      location: 'first',
    },
    {
      description:
        "An app designed for genealogists. Perhaps your ancestor inherited land in 1750? Or was paid by the Continental Army per mile of marching? This app will help you do a few necessary calculations with an unfamiliar currency.",
      carousel: [
        "images/slides/colonialCurrencySlide1.jpg",
        "images/slides/colonialSlide2.jpg",
      ],
      location: 'second',

    },
    {
      description:
        "A business simulation. In this case, a generic employee survey form populates an independent spreadsheet, and a relational database of companies and their employees is managed through the administrative pages. Java Spring Boot and Javascript.",
      carousel: ["images/slides/apexSlide1.jpg"],
      location: 'third',

    },

    {
      description: "a super DUPER cool thing",
      carousel: ["images/slides/apexSlide1.jpg"],
      location: 'fourth',

    },
  ];




const ProjectsPanel = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedProject, setClickedProject] = useState('')

  const closeModal = () => {
    setModalOpen(false);
  };

  const modalClicked = (project) => {
    setModalOpen(true);
    setClickedProject(project);

  };

  return (
    <div className={styles.projectsPanel}>
      <ProjectBox whichBox={projects[0]} clickHandler={modalClicked} />
      <ProjectBox whichBox={projects[1]} clickHandler={modalClicked} />
      <ProjectBox whichBox={projects[2]} clickHandler={modalClicked} />
      <ProjectBox whichBox={projects[3]} clickHandler={modalClicked} />
      {modalOpen && <ProjectModal closeModal={closeModal} whichProject={clickedProject} />};
    </div>
  );
};

export default ProjectsPanel;
