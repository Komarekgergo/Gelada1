import React from "react";
import "./App.css";
import Fololdal from "./components/Fooldal";
import Marvel from "./components/Marvel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CaptainMarvel from "./components/CaptainMarvel";
import Reklam from "./components/Reklam";
import Contact from "./components/Contact";
import Kezdolap from "./components/Kezdolap";
import DC from "./components/DC";

function App() {
  return (
    <>
      <Router>
        <Reklam />
        <Contact />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Kezdolap />} />
          <Route path="/fooldal" element={<Fololdal />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/dc" element={<DC />} />
          <Route path="/captainmarvel" element={<CaptainMarvel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
