import React from "react";
import { useState } from "react";

const ImageSlide = ({ imageArr }) => {

    const [currentImg, setCurrentImg] = useState(0);
    const length = imageArr.length;

    const nextImg = () => {
        setCurrentImg(currentImg === length-1 ? 0 : currentImg+1);
    }

    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? length-1: currentImg-1)
    }

    return (
        <div className="slideHolder">
            <button className="prevImg" onClick={prevImg}>Prev</button>
            <button className="nextImg" onClick={nextImg}>Next</button>
            {imageArr.map((image, index) => {
                return (
                    <div className="slideImg" key={index}>
                        {index === currentImg && (<img src={image.image} alt={image.alt}></img>)}
                        </div>
                )
            })}
        </div>
    );
};

export default ImageSlide;