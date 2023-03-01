import React, { useState, useEffect } from "react";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom";

//PAGES
import Home from "./Pages/Home";
import Earth from "./Pages/EarthAndWater";
import Director from "./Pages/ArtDirector";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

//CSS
import './App.css';

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
    
    <Nav />
    <ScrollToTop />
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/earthandwater" element={<Earth />} />
    <Route path="/director" element={<Director />} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/contact" element={<Contact/>} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
