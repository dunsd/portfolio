import React from "react";
import gitLogo from "../images/github-mark.svg"

const Projects = () => {

    return (
        <div className="prjContent">
            <h1>Projects Overview</h1>
            <div className="introPrjCard">
                <div className="prjInner">
                    <h2>Realm Reviews</h2>
                    <p>A CRUD website based on books.</p>
                    <p>Technologies: React, Node, Express, MongoDB, React-Bootstrap, Javascript</p>
                    <a href="https://github.com/dunsd/book-rating"><img src={gitLogo} alt="github logo" ></img></a>
                </div>
            </div>
            <div className="introPrjCard">
                <div className="prjInner">
                    <h2>Runeterra Hub</h2>
                    <p>A passion project to interface with the game Legends
                        of Runeterra. 
                    </p>
                    <p>Technologies: React, Firebase, CSS, Javascript</p>
                    <a href="https://github.com/dunsd/runeterra-project"><img src={gitLogo} alt="github logo" ></img></a>
                </div>
            </div>
            <div className="introPrjCard">
                <div className="prjInner">
                    <h2>CV Project</h2>
                    <p>An introductory React project using functional components and hooks.
                    </p>
                    <p>Technologies: React, CSS, Javascript</p>
                    <a href="https://github.com/dunsd/cv-project"><img src={gitLogo} alt="github logo" ></img></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;