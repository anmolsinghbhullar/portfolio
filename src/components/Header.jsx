import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <a href='/'><h1 className='header-title'>Anmol's Portfolio</h1></a>
            <nav className="header-nav">
                <ul className="nav-list">
                <li className="nav-item"><a href="#home">Download CV</a></li>
                <li className="nav-item">
                    <a href="projects">Projects</a>
                    <ul className="dropdown-menu">
                    <li className="dropdown-item"><a href="#project1">Project 1</a></li>
                    <li className="dropdown-item"><a href="#project2">Project 2</a></li>
                    <li className="dropdown-item"><a href="#project3">Project 3</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a href="about">About</a></li>
                <li className="nav-item"><a href="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;