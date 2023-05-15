import React from "react";
import runeterraHome from "../images/runeterra-home.png";
import runeterraProfile from "../images/runeterra-profile.png";
import runeterraMatchDetails from "../images/runeterra-match-details.png";
import runeterraBravery from "../images/runeterra-bravery.png";
import ImageSlide from "./ImageSlide";
import gitLogo from "../images/github-mark.svg"

const Runeterra = () => {
    const runeImgArr = [
    {image:  runeterraHome, alt: "Runeterra Hub home page"},
    {image: runeterraProfile, alt: "Runeterra Hub profile page"}, 
    {image: runeterraMatchDetails, alt: "Runeterra Hub match details"},
    {image: runeterraBravery, alt: "Runeterra Hub ultimate bravery"}];
    return (

        
        <div className="runeterraHub">
            <h1>Runeterra Hub</h1>
            <div className="prjDetails">
                <ImageSlide imageArr={runeImgArr}/>
                <div className="prjText">
                    <p>This is a passion project that interfaces with the Riot
                        Games API to retrieve data about the game: Legends of Runeterra.
                    </p>
                    <p>
                        I built this because I am a big fan of the game and wanted to develop
                        skills interfacing with APIs. So this helped me to develop my skills
                        working with APIs and handling fetch results. I started off using local
                        storage for usernames and API results and then progressed and replaced
                        this with a Firebase database for this.
                    </p>
                </div>
                <a href="https://github.com/dunsd/runeterra-project"><img src={gitLogo} alt="github logo" ></img></a>
            </div>
        </div>
    );
};

export default Runeterra;