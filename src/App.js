import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  return (
    <Router>
    <div>
      <Header>
        <Nav/>
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;