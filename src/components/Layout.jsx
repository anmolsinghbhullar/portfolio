import React from 'react';
import Header from './Header';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className='page'>
            <header>
                <Header />
            </header>
            <div className='content'>
                { children }
            </div>
            <footer>
                <p>Socials</p>
            </footer>
        </div>
    );
};

export default Layout;