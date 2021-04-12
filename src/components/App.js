import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import GotoHome from './utilities/GotoHome';
import GotoSettings from './utilities/GotoSettings';
import Settings from './utilities/Settings';
import Footer from './utilities/Footer';
import HomePage from './pages/HomePage';
import ExtPage from './pages/ExtPage';
import ImpPage from './pages/ImpPage';
import TimerPage from './pages/TimerPage';
import GuidePage from './pages/GuidePage';
import AboutPage from './pages/AboutPage';
import TOSPage from './pages/TOSPage';
import Error404Page from './pages/Error404Page';
import PrivacyPage from './pages/PrivacyPage';

function App() {
    const initSettings = {
        "delay": 0,
        "durationMin": 7,
        "signalDuration": 5,
        "showMS": false,
        "showTips": true
    };
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [settings, setSettings] = useState(initSettings);
    // const [absoluteHome, setAbsoluteHome] = useState(true);
    // const [showGotoSettings, setShowGotoSettings] = useState(false);

    // useEffect(() => {
    //     console.log("effect");
    //     setAbsoluteHome(window.location.pathname === "/LP-Timer/");
    //     setShowGotoSettings(["/","/ext","/imp","/timer"]
    //         .includes(window.location.href.match(/(?<=LP-Timer\/#)\/\w*/g)[0]));
    // }, [window.location.pathname, setAbsoluteHome, setShowGotoSettings]);

    return (
        <Router basename="/">
            <div className="page-container">
                <div id="goto-row">
                    <GotoHome />
                    <GotoSettings setOpen={setSettingsOpen} />
                </div>
                <Settings open={settingsOpen} settings={settings} setOpen={setSettingsOpen} setSettings={setSettings} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/ext">
                        <ExtPage 
                            min={settings.durationMin}
                            delay={settings.delay}
                            showTips={settings.showTips}
                            signalDuration={settings.signalDuration} />
                    </Route>
                    <Route path="/imp">
                        <ImpPage
                            min={settings.durationMin}
                            delay={settings.delay}
                            showTips={settings.showTips}
                            signalDuration={settings.signalDuration} />
                    </Route>
                    <Route path="/timer">
                        <TimerPage
                            min={settings.durationMin}
                            delay={settings.delay}
                            showMS={settings.showMS}
                            showTips={settings.showTips} />
                    </Route>
                    <Route path="/guide" component={GuidePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/terms" component={TOSPage} />
                    <Route path="/privacy" component={PrivacyPage} />
                    <Route component={Error404Page} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
