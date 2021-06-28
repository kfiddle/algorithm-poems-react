import { useState, useEffect } from "react";

import ProjectBox from "./ProjectBox";
import ProjectModal from "./projectModal/ProjectModal";

import styles from "./ProjectsPanel.module.css";

const ProjectsPanel = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const modalClicked = (project) => {
    setModalOpen(true);
  };

  const ourProjects = [];
  const classes = ["first", "second", "third", "fourth"];

  for (let j = 0; j < 4; j++) {
    ourProjects.push(
      <ProjectBox
        whichBox={classes[j]}
        clickHandler={modalClicked}
        key={Math.random()}
      />
    );
  }

  return (
    <div className={styles.projectsPanel}>
      {ourProjects}
      {modalOpen && <ProjectModal closeModal={closeModal} />};
    </div>
  );
};

export default ProjectsPanel;
