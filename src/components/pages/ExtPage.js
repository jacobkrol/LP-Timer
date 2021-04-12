import React from 'react';
import Timer from '../utilities/Timer';

function ExtPage({ min=7, delay=0, showTips=true, signalDuration=5 }) {
    return (
        <>
            <Timer mode="ext" min={min} delay={delay} showTips={showTips} signalDuration={signalDuration} />
        </>
    )
}

export default ExtPage;
