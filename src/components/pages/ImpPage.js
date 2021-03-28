import React from 'react';
import Timer from '../utilities/Timer';

function ImpPage({ min=7, delay=0 }) {
    return (
        <>
            <Timer mode="imp" min={min} delay={delay} />
        </>
    )
}

export default ImpPage;
