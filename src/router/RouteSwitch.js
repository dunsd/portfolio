import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";
import ProjectsDropDown from "../components/ProjectsDropDown";
import "../css/styles.scss";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="overallContent">
        <div className="mainContent">
        <span className="spacer">
        <Link to="/">
            <h3 className="home">Home</h3>
          </Link>
        </span>
          <Routes>
            <Route path="/" element={<Home />} exact={true} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          
          
        </div>
        <ProjectsDropDown />
        
      </div>
      
    </BrowserRouter>
  );
};

export default RouteSwitch;
