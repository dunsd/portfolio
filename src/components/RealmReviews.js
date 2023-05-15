import React from "react";
import realmLibrary from "../images/realm-reviews-library.png";
import realmAdd from "../images/realm-reviews-add.png";
import realmEdit from "../images/realm-reviews-edit.png"
import ImageSlide from "./ImageSlide";

const RealmReviews = () => {
    const realmImgArr = [{image: realmLibrary, alt: "Realm Reviews home page"}, 
    {image:  realmAdd, alt: "Realm Reviews add book form"},
    {image: realmEdit, alt: "Realm Reviews edit book form"}];
    return (

        
        <div className="realmReviews">
            Realm Reviews
            <ImageSlide imageArr={realmImgArr}/>
        </div>
    );
};

export default RealmReviews;