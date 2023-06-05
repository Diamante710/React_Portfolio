import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {

    return (
        <div>
            <Link to="/" id ='About Me'> About Me</Link>
            
            <Link to="/portfolio" id ='Portfolio'> Portfolio</Link>
            
            <Link to="/contact" id ='Contact'> Contact</Link>
            
            <Link to="/resume" id ='Resume'> Resume</Link>
        </div>
    )
}

export default Nav;