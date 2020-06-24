import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import GotoHome from './utilities/GotoHome';
import Footer from './utilities/Footer';
import HomePage from './pages/HomePage';
import ExtPage from './pages/ExtPage';
import ImpPage from './pages/ImpPage';
import TimerPage from './pages/TimerPage';
import GuidePage from './pages/GuidePage';
import AboutPage from './pages/AboutPage';
import Error404Page from './pages/Error404Page';

function App() {
  return (
    <Router>
        <div className="page-container">
            <GotoHome />
            <Switch>
                <Route exact path="/LP-Timer" component={HomePage} />
                <Route path="/ext" component={ExtPage} />
                <Route path="/imp" component={ImpPage} />
                <Route path="/timer" component={TimerPage} />
                <Route path="/guide" component={GuidePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={Error404Page} />
            </Switch>
            <Footer />
        </div>
    </Router>
  )
}

export default App;
