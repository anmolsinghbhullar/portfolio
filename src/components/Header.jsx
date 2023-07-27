import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <div className='header-title'>
                <h1>Anmol's Portfolio</h1>
            </div>
            <nav className='links'>
                <ul>
                    <li><a href='#cv_download'>Download CV</a></li>
                    <li><a href='about'>About</a></li>
                    <li><a href='project'>Projects</a></li>
                    <li><a href='contact'>Contact</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;