import React from "react";
import Links from "./Links";

const Home = () => {
  return (
    <div>
      <div className="introCard">
        <h1 className="introHeader">Hello, my name is Daniel.</h1>
        <p className="introPara">
          I am an aspiring Software Engineer currently working as an Electrical
          Design Engineer.
        </p>
        <Links />
      </div>
    </div>
  );
};
export default Home;
