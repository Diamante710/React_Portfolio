import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: "Book Search Engine",
      description: "MERN Stack/GraphQL/React",
      link: "",
      repo: "https://github.com/Diamante710/MERN_Book_Search_Engine.git",
    },
    {
      name: "How to make your kid hate you",
      description: "JavaScript/Node/Express/SQL/Handle-bars/HTML/CSS",
      link: "",
      repo: "https://github.com/Diamante710/how_to_make_your_kids_hate_you.git",
    },
    {
      name: "Cocktail Master",
      description: "JavaScript/API Routes/HTML/CSS",
      link: "https://diamante710.github.io/Cocktail-Master-Project-One/",
      repo: "https://github.com/Diamante710/Cocktail-Master-Project-One.git",
    },
    {
      name: "Social Network API Back End",
      description: "JavaScript/HTML/CSS/Bootstrap/MySql/Server-Side API",
      link: "https://drive.google.com/file/d/1xETGP-mZlSHIdiqK3RtzU4QSaEQfGKss/view",
      repo: "https://github.com/Diamante710/Social_Network_API.git",
    },
    {
      name: "Employee_Tracker Back End",
      description: "JavaScript/HTML/CSS/Bootstrap/MySql/Server-Side API",
      link: "https://drive.google.com/file/d/1faBIPnMOeSnk0WYbYmVt_KBxFJkQ9y1z/view",
      repo: "https://github.com/Diamante710/Employee_Tracker.git",
    },
    {
      name: "E-Commerce Back End",
      description: "JavaScript/HTML/CSS/Bootstrap/MySql/Server-Side API",
      link: "https://drive.google.com/file/d/10bbFBNdKkZeyUJwxsJ59q6HPxG9i9KRb/view",
      repo: "https://github.com/Diamante710/E-Commerce-BackEnd.git",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;