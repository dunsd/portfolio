import React from "react";
import { Link } from "react-router-dom";

const ProjectsDropDown = () => {
  return (
    <nav className="prjDrop">
      <span className="spacer"></span>
      <ul className="prjContent">
        
        <li className="dropdown">
          <h3>+ Projects</h3>

          <ul className="dropItems">
            <li>
              <Link to="/portfolio/projects">Overview</Link>
            </li>
            <li>
              <Link to="/portfolio/realm-reviews">Realm Reviews</Link>
            </li>
            <li>
              <Link to="/portfolio/runeterra">Runeterra Hub</Link>
            </li>
            <li>
              <Link to="/portfolio/cv-project">CV Project</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default ProjectsDropDown;
