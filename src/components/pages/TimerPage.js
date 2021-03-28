import React from 'react';
import Timer from '../utilities/Timer';

function TimerPage({ min=7, delay=0, showMS=false }) {
    return (
        <>
            <Timer mode="none" min={min} delay={delay} showMS={showMS} />
        </>
    )
}

export default TimerPage;
