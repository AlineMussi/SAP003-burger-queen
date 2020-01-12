import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function Input(props){
    return(
        <input className={css(styles.input)}
        type={props.type}
        onChange={props.handleChange}
        onClick={props.handleClick}
        placeholder={props.placeholder}
        value={props.value}/>
    )};

    const styles = StyleSheet.create({
        input: {
            fontSize: '20px',
            padding: '1vh',
            borderRadius: '6px',
            margin: '1vh',
        },
    });

    export default Input;