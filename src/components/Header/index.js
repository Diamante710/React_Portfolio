import React from 'react';
import headerImage from "../../assets/images/HeaderImage.jpg"

function Header(props) {
    return (
        <header className="flex-row space-between px-1">
            <h1>Jessie Diamante Caban</h1>
            <img src={headerImage} alt="wooden background"></img>
            {props.children}
        </header>
    );
}
export default Header;