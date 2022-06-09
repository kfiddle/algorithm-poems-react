import ProjectBox1 from "../projectBox1/ProjectBox1";
import styles from "./ProjectsPanel1.module.css";

import orchImage from "../../../assets/orchestra-master/rosterSpots.jpg";
import skyPondImage from "../../../assets/skypond.jpg";
import colonialImage from "../../../assets/colonialCurrencyShot.jpg";
import menorahImage from "../../../assets/menorah2.jpg";

const projects = [
  {
    description:
      "An app which manages the seating rosters for an Orchestra. One front-end client is the dashboard for managing the personnel, including the relational database for concerts, the library, all players, and seating rosters for each performance. A second front-end is the player's view. A player can login, reply, and view relevant performing information.",
    frontImage: orchImage,
    transition: "1.5s",
    carousel: ["images/slides/apexSlide1.jpg"],
    location: "third",
    languages: "React, Java Spring Boot",
    link: "",
  },
  {
    description:
      "A collaboration with my friend Karin Samoviski. All animations and components are vanilla Javascript, and the back-end modeling and database are built in Java and Spring Boot. ",
    frontImage: skyPondImage,
    transition: "2s",
    carousel: [
      "images/slides/skyPondSlide1.jpg",
      "images/slides/skyPondSlide2.jpg",
      "images/slides/skyPondPhoneFormatter.jpg",
    ],
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
      "images/slides/ColonialCurrencySlide1.jpg",
      "images/slides/colonialSlide2.jpg",
      "images/slides/colonial-calculator4.jpg",
    ],
    location: "second",
    languages: "Javascript, Java Spring Boot",
    link: "https://aqueous-ridge-03205.herokuapp.com/",
  },

  {
    description:
      "A full-stack database to manage foundation contributions and associated expenses for a local non-profit",
    frontImage: menorahImage,
    transition: "2s",
    carousel: ["images/slides/menorah1.jpg", "images/slides/menorah2.jpg"],
    location: "fourth",
    languages: "React, Java, Spring Boot",
    link: "",
  },
];

const ProjectsPanel1 = () => {
  const displayableProjects = projects.map((project) => (
    <ProjectBox1 key={projects.indexOf(project)} project={project} />
  ));
  return <div className={styles.outerContainer}>{displayableProjects}</div>;
};

export default ProjectsPanel1;

{
  /* <ProjectBox1 project={projects[0]} />
      <ProjectBox1 project={projects[1]} />
      <ProjectBox1 project={projects[2]} />
      <ProjectBox1 project={projects[3]} /> */
}
