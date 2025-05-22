import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      className="projects"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem
            key={project.name || idx}
            id={idx}
            name={project.name}
            image={project.image}
            gif={project.gif}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
