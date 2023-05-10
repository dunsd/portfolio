import React from "react";

const Skills = () => {
    return (
        <ul className="skills">
            <li><h3 className="skillsHeader">Skills:</h3></li>

            <ul> <p className="focusHeader">Current Focus:</p>
                <li>Javascript</li>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS - Flexbox, CSS Grid</li>
            </ul>
            <ul>
                <p className="focusHeader">Experience with:</p>
                <li>C++</li>
                <li>C</li>
                <li>Embedded C</li>
            </ul>
            
        </ul>
    )
}

export default Skills;