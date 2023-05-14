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
        <div>
            <button onClick={prevImg}>Prev</button>
            <button onClick={nextImg}>Next</button>
            {imageArr.map((image, index) => {
                return (
                    <div>
                        {index === currentImg && (<img src={image.image} alt={image.alt}></img>)}
                        </div>
                )
            })}
        </div>
    );
};

export default ImageSlide;