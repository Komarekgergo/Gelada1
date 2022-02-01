import React from "react";
import "./App.css";
import Fololdal from "./components/Fooldal";
import Aloldal from "./components/Aloldal";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import Nav from "./components/Nav";
import Marvel from "./components/Marvel";
import Reklam from "./components/Reklam";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Reklam />
        <Contact />
        <Nav />
        <Routes>
          <Route path="/fooldal" element={<Fololdal />} />
          <Route path="/aloldal" element={<Aloldal />} />
          <Route path="/Marvel" element={<Marvel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
