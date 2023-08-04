import React from 'react';
import Header from './Header';
import './Layout.css';

const Layout = ({ page_nav, children }) => {
    return (
        <div className='page'>
            <header>
                <Header />
            </header>
            <div className='content'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='card-avi'>
                            <img src='/src/assets/cat-grimacing.png' alt='cat-grimacing' />
                        </div>
                        <div className='card-title'>
                            <h1>About Me</h1>
                            <ul>
                                <li className='card-title-home'><a href='/'>Home</a></li>
                                <li><a href='/about'>About</a></li>
                                <li><a href='/projects'>Projects</a></li>
                                <li><a href='/contact'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='card-nav'>
                            { title }
                        </div>
                        <div className='card-content'>
                            { children }
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>Socials</p>
            </footer>
        </div>
    );
}

export default Layout;