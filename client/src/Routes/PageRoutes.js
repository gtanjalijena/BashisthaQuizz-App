import React from "react";
import SignupAndLogin from "../Pages/SignupAndLogin/SignupAndLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Dashboard/Home.jsx";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupAndLogin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
