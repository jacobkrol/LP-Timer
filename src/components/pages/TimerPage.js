import React from 'react';
import Timer from '../utilities/Timer';

function TimerPage({ min=7, delay=0, showMS=false, showTips=true }) {
    return (
        <>
            <Timer mode="none" min={min} delay={delay} showMS={showMS} showTips={showTips} />
        </>
    )
}

export default TimerPage;
