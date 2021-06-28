import { useState, useEffect, Fragment } from "react";

import ProjectBox from "./ProjectBox";

import styles from "./ProjectsPanel.module.css";

const ProjectsPanel = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalClicked = (project) => {
      console.log(project);
  }

  const ourProjects = [];
  const classes = ['first', 'second', 'third', 'fourth'];

  for (let j = 0; j < 4; j++) {
      ourProjects.push(<ProjectBox whichBox={classes[j]} clickHandler={modalClicked} />)
  }

  return (
    <div className={styles.projectsPanel}>
      {ourProjects}
    </div>
  );
};

export default ProjectsPanel;
