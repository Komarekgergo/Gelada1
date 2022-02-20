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
import HPotter from "./components/HPotter";
import StarWars from "./components/StarWars";
import GoT from "./components/GoT";
import Witcher from "./components/Witcher";
import RM from "./components/RM";
import Disney from "./components/Disney";
import Assassin from "./components/Assassin";
import Figura from "./components/Figura";





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
          <Route path="/hpotter" element={<HPotter />} />
          <Route path="/sw" element={<StarWars />} />
          <Route path="/got" element={<GoT />} />
          <Route path="/witcher" element={<Witcher />} />
          <Route path="/rm" element={<RM />} />
          <Route path="/disney" element={<Disney />} />
          <Route path="/assassin" element={<Assassin />} />
          <Route path="/figura" element={<Figura />} />
          <Route path="/captainmarvel" element={<CaptainMarvel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
