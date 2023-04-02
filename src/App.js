import "./App.css";

import React from "react";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
