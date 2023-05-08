import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";

const RouteSwitch = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
