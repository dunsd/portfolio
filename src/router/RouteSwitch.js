import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";
import ProjectsDropDown from "../components/ProjectsDropDown";
import RealmReviews from "../components/RealmReviews";
import Runeterra from "../components/Runeterra";
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
            <Route path="/realm-reviews" element={<RealmReviews />} />
            <Route path="/runeterra" element={<Runeterra />} />
          </Routes>
          
          
        </div>
        <ProjectsDropDown />
        
      </div>
      
    </BrowserRouter>
  );
};

export default RouteSwitch;
