import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  const [activePage, setPage] = useState('about');
  

  const handleNav = (section) => {
    setPage(section);
  };

  return (
    <div className="App">
    <Header activePage={activePage} handleNav={handleNav} />
    {activePage === "about me" && <AboutMe />}
    {activePage === "portfolio" && <Portfolio />}
    {activePage === "contact" && <Contact />}
    {activePage === "resume" && <Resume />}
    <Footer />
  </div>
  );
}

export default App;