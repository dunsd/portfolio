import React from "react";
import realmLibrary from "../images/realm-reviews-library.png";

const Projects = () => {

    return (
        <div className="prjContent">
            <div className="introPrjCard">
                <h1>Project Overview</h1>
                <div>
                    <h2>Realm Reviews</h2>
                    <p>A CRUD website based on books.</p>
                    <p>Technologies: React, Node, Express, MongoDB</p>
                    <img src={realmLibrary} alt="Realm Reviews website"></img>
                </div>
            </div>
        </div>
    )
}

export default Projects;