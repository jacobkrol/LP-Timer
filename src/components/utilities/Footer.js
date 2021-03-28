import React from 'react';
import '../../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <p><Link to="/about">About LP Timer</Link></p>
            <p><Link to="/terms">Terms of Service</Link></p>
            <p><Link to="/privacy">Privacy Policy</Link></p>
            <p><span style={{fontFamily: "Verdana, Calibri, sans-serif"}}>&copy;</span> 2020-2021 <a href="https://kroljs.com" target="_blank" rel="noopener noreferrer">Jacob Krol</a></p>
        </footer>
    )
}

export default Footer;
