import React from 'react';
import '../../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <p>LP Timer PWA v1.2.0 - Copyright 2020 <a href="https://kroljs.com" target="_blank" rel="noopener noreferrer">Jacob Krol</a> - <Link to="/about">Learn More</Link></p>
        </footer>
    )
}

export default Footer;
