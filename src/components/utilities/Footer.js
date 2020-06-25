import React from 'react';
import '../../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <p>Limited Preparation Timer Web Application 2020 - <a href="https://jacobkrol.github.io" target="_blank" rel="noopener noreferrer">JSK</a> - <Link to="/about">Learn More</Link></p>
        </footer>
    )
}

export default Footer;
