import { useState, useEffect } from "react";

import ProjectBox from "./ProjectBox";
import ProjectModal from "./projectModal/ProjectModal";

import styles from "./ProjectsPanel.module.css";

const projects = {'first': false, 'second': false, 'third': false, 'fourth': false};

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
      <ProjectBox whichBox={"first"} clickHandler={modalClicked} />
      <ProjectBox whichBox={"second"} clickHandler={modalClicked} />
      <ProjectBox whichBox={"third"} clickHandler={modalClicked} />
      <ProjectBox whichBox={"fourth"} clickHandler={modalClicked} />
      {modalOpen && <ProjectModal closeModal={closeModal} whichProject={clickedProject} />};
    </div>
  );
};

export default ProjectsPanel;
