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
                        <Link  to="/projects">Overview</Link>
                    </li>
                    <li>
                        <Link to="/realm-reviews">Realm Reviews</Link>
                    </li>
                    <li>
                        <Link to="/runeterra">Runeterra Hub</Link>
                    </li>
                </ul>
                </li>
            </ul>
            
        </nav>
    )
}

export default ProjectsDropDown;