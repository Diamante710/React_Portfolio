import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p>
          Download my <a href="https://drive.google.com/file/d/1ra1Okld6qNxt6r1upAe-4aFF3nzPcygD/view?usp=sharing">Resume</a>
        </p>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
        </ul>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Handlebars</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;