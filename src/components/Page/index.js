import React from "react";
import PageContent from "../PageContent";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Page({ currentPage }) {
  console.log(currentPage)
  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <h2>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </div>
  );
}

export default Page;