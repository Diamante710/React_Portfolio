import React from 'react';

function Nav(props) {

    const sections = ["about me", "portfolio", "contact", "resume"];

    return (
   <nav>
        {sections.map((section) => (
          <button
            key={section}
            className={props.activePage === section ? "active" : ""}
            onClick={() => props.handleNav(section)}
          >
            {section}
          </button>
        ))}
      </nav>
    )
}

export default Nav;