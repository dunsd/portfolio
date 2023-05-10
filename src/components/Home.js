import React from "react";
import Links from "./Links";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="homeContent">
      <div className="introCard">
        <div className="introText">
          <h1 className="introHeader">Hello, my name is Daniel.</h1>
          <p className="introPara">
            I am an aspiring Software Engineer currently working as an Electrical
            Design Engineer.
          </p>
          <Skills />
        </div>
        <div className="linkContainer">
          <Links />
        </div>
      </div>
      
    </div>
  );
};
export default Home;
