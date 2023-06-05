import React from 'react';

function Footer() {
    const icon = [
        {
            name: "fab fa-github",
            link: "https://github.com/Diamante710/"
        },
    ]

 return (
    <footer className="flex-row px-1">
        &copy; {new Date().getFullYear()}
            {icon.map(icon =>
            (<a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
            ))}
    </footer>
    );
}

export default Footer;