import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CVProject from "../components/CVProject";
import Home from "../components/Home";
import Projects from "../components/Projects";
import ProjectsDropDown from "../components/ProjectsDropDown";
import RealmReviews from "../components/RealmReviews";
import Runeterra from "../components/Runeterra";
import "../css/styles.scss";
import "./RouteSwitch.scss";

const RouteSwitch = () => {

  const [overallClass, setOverallClass] = useState("hidden");
  useEffect(() => {
    setOverallClass("visible");
  },[]);

  
  return (
    <BrowserRouter>
      <div className={`overallContent ${overallClass}`}>
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
