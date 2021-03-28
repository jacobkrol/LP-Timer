import React, { useReducer, useEffect } from 'react';
import '../../styles/Settings.css';

const reducer = (state, action) => {
    switch(action.modify) {
        case 'delay':
            return {...state, delay: action.value};
        case 'durationMin':
            return {...state, durationMin: action.value};
        case 'durationSec':
            let value = String(action.value);
            if(Number(value) < 0) value = "0";
            if(Number(value) > 59) value = "59";
            if(Number(value) < 10) value = "0"+String(value);
            return {...state, durationSec: value};
        case 'showMS':
            return {...state, showMS: Boolean(action.value)};
        case 'all':
            return {...action.value};
        default:
            console.log("unrecognized action modifier:",action);
            return;
    }
}

const SanitizeInt = (val) => val.replace(/\D/g, '');

function Settings({ open, setOpen, settings, setSettings }) {
    const [state, dispatch] = useReducer(reducer, settings);

    useEffect(() =>
        dispatch({modify: 'all', value: {...settings}}),
    [open, settings]);

    return (
        <div style={open ? {display: "flex"} : {display: "none"}} id="settings-outer">
            <div id="settings-inner">
                <div id="setting-title">
                    <p>Settings</p>
                </div>
                <div className="setting-row">
                    <label htmlFor="settings-delay">Startup Delay</label>
                    <input 
                        id="settings-delay"
                        name="delay"
                        type="number"
                        value={state.delay}
                        onChange={(event) => dispatch({modify: "delay", value: SanitizeInt(event.target.value)})} />
                    <span>&nbsp;seconds</span>
                </div>
                <div className="setting-row">
                    <label htmlFor="settings-duration-min">Duration</label>
                    <input 
                        id="settings-duration-min"
                        name="durationMin"
                        type="number"
                        value={state.durationMin}
                        onChange={(event) => dispatch({modify: "durationMin", value: SanitizeInt(event.target.value)})} />
                    <span>&nbsp;minutes</span>
                    {/* <span>&nbsp;:&nbsp;</span>
                    <input 
                        id="settings-duration-sec"
                        name="durationSec"
                        type="number"
                        value={state.durationSec}
                        onChange={(event) => dispatch({modify: "durationSec", value: SanitizeInt(event.target.value)})} /> */}
                </div>
                <div className="setting-row">
                    <input
                        id="settings-show-ms"
                        name="showMS"
                        type="checkbox"
                        checked={state.showMS}
                        onChange={(event) => dispatch({modify: "showMS", value: event.target.checked})} />
                    <label htmlFor="settings-show-ms" className="after">Show milliseconds</label>
                </div>
                <div id="settings-button-row">
                    <div
                        className="setting-button"
                        onClick={() => setOpen(false)}>
                        <span>Cancel</span>
                    </div>
                    <div
                        className="setting-button primary"
                        onClick={() => {
                            setSettings(state);
                            setOpen(false);
                        }}>
                        <span>Save &amp; Close</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;