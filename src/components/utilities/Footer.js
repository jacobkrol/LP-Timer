import React from 'react';
import '../../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <p>Limited Preparation Timer Web Application v1.0.1 - <a href="https://kroljs.com" target="_blank" rel="noopener noreferrer">JSK</a> - <Link to="/about">Learn More</Link></p>
        </footer>
    )
}

export default Footer;
