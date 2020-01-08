import React from 'react';

function Input(props){
    return(
        <input
        className={props.class}
        type={props.type}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        value={props.value}/>
    )};

    export default Input;