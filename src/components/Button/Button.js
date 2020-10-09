import React from 'react';
import './Button.css';

const Button = (props) => ( 
    <button playing={props.playing} onClick={props.startGame}>
        { props.playing ? 'reset' : 'start' }
    </button>
)

export default Button
