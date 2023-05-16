import React from "react";
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import CVProject from "../components/CVProject";
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
        <Link to="/portfolio/">
            <h3 className="home">Home</h3>
          </Link>
        </span>
          <Routes>
            <Route path="/portfolio" element={<Home />} exact={true} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/realm-reviews" element={<RealmReviews />} />
            <Route path="/portfolio/runeterra" element={<Runeterra />} />
            <Route path="/portfolio/cv-project" element={<CVProject />} />
          </Routes>
          
          
        </div>
        <ProjectsDropDown />
        
      </div>
      
    </BrowserRouter>
  );
};

export default RouteSwitch;
