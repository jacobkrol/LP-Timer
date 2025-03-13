import React from 'react';
import Timer from '../utilities/Timer';

function ImpPage({ min=7, delay=15, showTips=true, signalDuration=5 }) {
    return (
        <>
            <Timer mode="imp" min={min} delay={delay} showTips={showTips} signalDuration={signalDuration} />
        </>
    )
}

export default ImpPage;
