import React from "react";
import gitLogo from "../images/github-mark.svg"
import LILogo from "../images/LI-logo.png"

const Links = () => {
    return (
        <div className="links">
            <a href="https://github.com/dunsd"><img src={gitLogo} alt="github logo" ></img></a>
            <a href="https://linkedin.com/in/daniel-parker-46abab173">
                <img src={LILogo} alt="linkedin logo" ></img>
            </a>
        </div>
    )
}
export default Links;