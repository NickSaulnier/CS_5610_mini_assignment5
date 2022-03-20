import React, { useState } from 'react';
import Box from './Box';
import '../styles/Counter.css'

export default function Counter() {   
    const [boxOnCount, setBoxOnCount] = useState(0);

    const handleBoxClickEvents = (incrementCount) => {
        if (incrementCount) {
            setBoxOnCount(boxOnCount+1);
        } else {
            setBoxOnCount(boxOnCount-1);
        }
    }

    return (
        <div id='GridContainer'>
            <h1>{'Count: ' + boxOnCount}</h1>
            <div className='RowContainer'>
                <Box index={1} handleBoxClickEvents={handleBoxClickEvents} />
                <Box index={2} handleBoxClickEvents={handleBoxClickEvents} />
            </div>
            <div className='RowContainer'>
                <Box index={3} handleBoxClickEvents={handleBoxClickEvents} />
                <Box index={4} handleBoxClickEvents={handleBoxClickEvents} />
            </div>
        </div>
    );
}