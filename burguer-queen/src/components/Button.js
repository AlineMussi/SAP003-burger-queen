import React from 'react';

function Button(props) {
    return(
        <button 
        type={props.type}
        className={props.class}
        onClick={props.handleClick}>
        {props.title}{props.adtitle}
        </button>
    )};

export default Button;