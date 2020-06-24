import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/ButtonPanel.css';

function ButtonPanel() {
    return (
        <ul>
            <li><Link to="/ext">Extemporaneous</Link></li>
            <li><Link to="/imp">Impromptu</Link></li>
            <li><Link to="/timer">Plain Timer</Link></li>
            <li><Link to="/guide">How To Use</Link></li>
        </ul>
    )
}

export default ButtonPanel;
