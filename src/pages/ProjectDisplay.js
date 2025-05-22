import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import Github from "./../assets/github.png";
import "../styles/ProjectDisplay.css";
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  if (!project) {
    return <div className="project-error">Project not found.</div>;
  }

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <video controls width="640" height="360">
        <source src={project.image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="image-container">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="github" />
          <p>View Code</p>
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
