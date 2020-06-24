import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/GotoHome.css';
import LPLogo from '../../graphics/lp-logo.png';

function GotoHome() {
    return (
        <Link to="/LP-Timer"><img id="home-img" src={LPLogo} alt="Home" /></Link>
    )
}

export default GotoHome;
