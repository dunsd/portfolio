import React from "react";
import cv1 from "../images/cv-1.png";
import cv2 from "../images/cv-2.png";
import ImageSlide from "./ImageSlide";
import gitLogo from "../images/github-mark.svg"

const CVProject = () => {
    const cvImgArr = [
    {image:  cv1, alt: "CV Form top half"},
    {image: cv2, alt: "CV Form bottom half"}];
    return (

        
        <div className="cvProject">
            <h1>Realm Reviews</h1>
            <div className="prjDetails">
                <ImageSlide imageArr={cvImgArr}/>
                <div className="prjText">
                    <p>This is a React app that was my introduction to functional components and
                        the use of state to transfer data.
                    </p>
                    <p>
                        I built this whilst following The Odin Project curriculum. This was 
                        my first experience with React and involves basic state usage with forms
                        to input and display data.
                    </p>
                </div>
                <a href="https://github.com/dunsd/cv-project"><img src={gitLogo} alt="github logo" ></img></a>
            </div>
        </div>
    );
};

export default CVProject;