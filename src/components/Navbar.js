import React from 'react';
import './Navbar.css'

function Navbar(props) {
    return (
        <div className="navbar">
            <a className="navbar-element" href="/">
                HOME  
            </a>
            <a className="navbar-element" href="/projects">
                PROJECTS  
            </a>
            <a className="navbar-element" href="/about">
                ABOUT ME  
            </a>
            <a className="navbar-element" href="blog">
                BLOG
            </a>
        </div>
    );
}

export default Navbar;