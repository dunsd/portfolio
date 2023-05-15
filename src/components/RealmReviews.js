import React from "react";
import realmLibrary from "../images/realm-reviews-library.png";
import realmAdd from "../images/realm-reviews-add.png";
import realmEdit from "../images/realm-reviews-edit.png"
import ImageSlide from "./ImageSlide";
import gitLogo from "../images/github-mark.svg"

const RealmReviews = () => {
    const realmImgArr = [{image: realmLibrary, alt: "Realm Reviews home page"}, 
    {image:  realmAdd, alt: "Realm Reviews add book form"},
    {image: realmEdit, alt: "Realm Reviews edit book form"}];
    return (

        
        <div className="realmReviews">
            <h1>Realm Reviews</h1>
            <div className="prjDetails">
                <ImageSlide imageArr={realmImgArr}/>
                <div className="prjText">
                    <p>This is a CRUD app that was built with React and
                        uses the MERN stack by incorporating MongoDB to store
                        the books and their relevant details.
                    </p>
                    <p>
                        I chose to build this to develop my React skills and
                        gain experience with MongoDB. I decided to make it about books
                        as reading books is something that I am passionate about. Fantasy
                        is the main genre I love, which is why this project is titled
                        Realm Reviews.
                    </p>
                </div>
                <a href="https://github.com/dunsd/book-rating"><img src={gitLogo} alt="github logo" ></img></a>
            </div>
        </div>
    );
};

export default RealmReviews;