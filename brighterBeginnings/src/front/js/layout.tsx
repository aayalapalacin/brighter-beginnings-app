import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar"; // Navbar is re-enabled
import Programs from "./pages/programs";
import Staff from "./pages/staff";
import About from "./pages/about";
import Reviews from "./pages/reviews";
import Photos from "./pages/photos";
import Careers from "./pages/careers";
import Forms from "./pages/forms";
import Footer from "./component/Footer"; // Footer is re-enabled

import '../styles/layout.css'; // Make sure this path is correct for your layout.css

const Layout = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        {/* Navbar is back in the DOM */}
        <Navbar
          pages={["About", "Programs", "Staff", "Reviews", "Photos", "Careers", "Forms"]}
        />

       

        <div className="main-content-wrapper">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Programs />} path="/programs" />
            <Route element={<Staff />} path="/staff" />
            <Route element={<Reviews />} path="/reviews" />
            <Route element={<Photos />} path="/photos" />
            <Route element={<Careers />} path="/careers" />
            <Route element={<Forms />} path="/forms" />
          </Routes>
        </div>

        <Footer copywright={true} />

      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);