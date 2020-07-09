import React from 'react';
import Form from '../utilities/Form';
import '../../styles/AboutPage.css';
import { FiAlertTriangle } from 'react-icons/fi';

function AboutPage() {
    return (
        <div id="about-page">
            <h1>About this App</h1>
            <h3>Submit Feedback</h3>
                <p>Found a bug? Encountered an accessibility concern? Want to see a new feature added? Let me know!</p>
                <Form />
                <p><FiAlertTriangle size={15} title="attention" /> Before submitting feedback, please check <a href="https://github.com/jacobkrol/LP-Timer/issues" target="_blank" rel="noopener noreferrer">if I am already working on it</a>.</p>
            <h3>App Infrastructure</h3>
                <p>The front-end for this progressive web application is built using the JavaScript framework, <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">ReactJS v16.13.1</a>. It is hosted on GitHub Pages, and the code is entirely open-source for you to read, nitpick, and expand upon. The pre-build files may be found on <a href="https://github.com/jacobkrol/LP-Timer" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                <p>To handle feedback submission, the back-end is built using <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js v13.8.0</a>, with the <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">Express v4.17.1</a> framework. It is hosted using <a href="https://heroku.com" target="_blank" rel="noopener noreferrer">Heroku</a> and implements a CORS-protected REST API endpoint for feedback submission. Feedback is submitted to the database through the endpoint, and via email through an SMTP client. Feedback review is strictly available through the <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">Heroku CLI v7.42.1</a> or through a locally-accessible endpoint.</p>
            <h3>Licensing</h3>
                <p>The limited preparation timer progressive web application is open-sourced under a MIT license. To read the conditions of this license, visit the <a href="https://github.com/jacobkrol/LP-Timer/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">LICENSE file in the host repository</a>.</p>
        </div>
    )
}

export default AboutPage;
