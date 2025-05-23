import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectItem.css";
function ProjectItem({ image, name, id, gif }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="gif-container">
        <img alt="image" src={gif} />
      </div>

      {/* <div style={{ backgroundImage: `url(${image})` }} className="bgImage" /> */}
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
