import React from 'react';
import Timer from '../utilities/Timer';

function ExtPage({ min=7, delay=0 }) {
    return (
        <>
            <Timer mode="ext" min={min} delay={delay} />
        </>
    )
}

export default ExtPage;
