import React from "react";
import realmLibrary from "../images/realm-reviews-library.png";
import gitLogo from "../images/github-mark.svg"
import ImageSlide from "./ImageSlide";

const RealmReviews = () => {
    const realmImgArr = [{image: realmLibrary, alt: "home page"}, {image:  gitLogo}];
    return (

        
        <div className="realmReviews">
            Realm Reviews
            <ImageSlide imageArr={realmImgArr}/>
        </div>
    );
};

export default RealmReviews;