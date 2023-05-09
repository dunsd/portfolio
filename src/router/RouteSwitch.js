import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";
import "../css/styles.scss";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <span className="spacer"></span>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
