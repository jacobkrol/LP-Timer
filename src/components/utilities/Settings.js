import React, { useReducer, useEffect } from 'react';
import '../../styles/Settings.css';

const reducer = (state, action) => {
    switch(action.modify) {
        case 'delay':
            return {...state, delay: action.value};
        case 'durationMin':
            return {...state, durationMin: action.value};
        case 'signalDuration':
            return {...state, signalDuration: action.value};
        case 'showMS':
            return {...state, showMS: Boolean(action.value)};
        case 'showTips':
            return {...state, showTips: Boolean(action.value)};
        case 'all':
            return {...action.value};
        default:
            console.log("unrecognized action modifier:",action);
            return;
    }
}

const SanitizeInt = (element, value) => {
    value = value.replace(/(?=\.).+/,'');
    value = value.replace(/[^0-9]/g,'');
    if(Number(value) < element.min) value = element.min;
    if(Number(value) > element.max) value = element.max;
    return Number(value);
}

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
                        min="0"
                        max="99"
                        value={state.delay}
                        onChange={(event) => dispatch({modify: "delay", value: event.target.value})}
                        onBlur={(event) => dispatch({modify: "delay", value: SanitizeInt(event.target, event.target.value)})} />
                    <span>&nbsp;seconds</span>
                </div>
                <div className="setting-row">
                    <label htmlFor="settings-duration-min">Timer Duration</label>
                    <input 
                        id="settings-duration-min"
                        name="durationMin"
                        type="number"
                        min="1"
                        max="60"
                        value={state.durationMin}
                        onChange={(event) => dispatch({modify: "durationMin", value: event.target.value})}
                        onBlur={(event) => dispatch({modify: "durationMin", value: SanitizeInt(event.target, event.target.value)})} />
                    <span>&nbsp;minutes</span>
                </div>
                <div className="setting-row">
                    <label htmlFor="settings-signal-duration">Display Signals</label>
                    <input 
                        id="settings-signal-duration"
                        name="signalDuration"
                        type="number"
                        min="1"
                        max="59"
                        value={state.signalDuration}
                        onChange={(event) => dispatch({modify: "signalDuration", value: event.target.value})}
                        onBlur={(event) => dispatch({modify: "signalDuration", value: SanitizeInt(event.target, event.target.value)})} />
                    <span>&nbsp;seconds</span>
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
                <div className="setting-row">
                    <input
                        id="settings-show-tips"
                        name="showTips"
                        type="checkbox"
                        checked={state.showTips}
                        onChange={(event) => dispatch({modify: "showTips", value: event.target.checked})} />
                    <label htmlFor="settings-show-tips" className="after">Show hint details</label>
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