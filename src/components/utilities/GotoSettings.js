import React from 'react';
import '../../styles/GotoSettings.css';
import { IoSettingsSharp } from 'react-icons/io5';

function GotoSettings({ setOpen }) {
    return (
        <div
            id="gotosettings"
            onClick={() => setOpen(true)}
        >
            <IoSettingsSharp size={40} title="Settings" />
        </div>
    )
}

export default GotoSettings;