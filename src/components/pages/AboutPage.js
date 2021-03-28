import React from 'react';
import Form from '../utilities/Form';
import '../../styles/AboutPage.css';
import { FiAlertTriangle } from 'react-icons/fi';

function AboutPage() {
    return (
        <div id="about-page">
            <h1>About this App</h1>
            <h3>Submit Feedback</h3>
                <p>Found a bug? Encountered an accessibility concern? Want to see a new feature added? Let me know! The following information helps me to follow through and follow up to the best of my ability.</p>
                <Form />
                <p><FiAlertTriangle size={15} title="attention" /> Before submitting feedback, please check <a href="https://github.com/jacobkrol/LP-Timer/issues" target="_blank" rel="noopener noreferrer">if I am already working on it</a>.</p>
            <h3>Licensing</h3>
                <p>The limited preparation timer progressive web application is open-sourced under a MIT license. To read the conditions of this license, visit the <a href="https://github.com/jacobkrol/LP-Timer/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">LICENSE file in the host repository</a>.</p>
            <h3>Updates</h3>
                <p>This is LP Timer PWA v1.3.2. You can check for the latest version <a href="https://github.com/jacobkrol/LP-Timer/releases" target="_blank" rel="noopener noreferrer">on the project releases page</a>.</p>
        </div>
    )
}

export default AboutPage;
