import React, { useState } from 'react';
import '../styles/Box.css'

const Box = props => {   
    const [isBoxSelected, setIsBoxSelected] = useState(false);

    const handleBoxClicked = () => {
        const boxElement = document.getElementById('Box' + props.index);
        
        if (isBoxSelected) {
            boxElement.classList.remove('SelectedBox');
        } else {
            boxElement.classList.add('SelectedBox');
        }

        setIsBoxSelected(!isBoxSelected);
        props.handleBoxClickEvents(!isBoxSelected);
    }

    return (
        <div id={'Box' + props.index} className='Box' onClick={() => handleBoxClicked()}>
        </div>
    );
}

export default Box;