import { useState, useEffect, Fragment } from "react";

import ProjectBox from './ProjectBox';

import styles from "./ProjectsPanel.module.css";

const ProjectsPanel = (props) => {
 

  return <div className={styles.projectsPanel}>

      <ProjectBox whichBox={'first'} />
      <ProjectBox whichBox={'second'}/>

      <ProjectBox whichBox={'third'}/>
      <ProjectBox whichBox={'fourth'}/>
      
      </div>;




};

export default ProjectsPanel;
