import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import React from 'react';

function App() {
  return (
    <Router>
      <div>
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;