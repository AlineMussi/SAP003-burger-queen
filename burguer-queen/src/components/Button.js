import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function Button(props) {
    return(
        <button 
        className={css(styles.btn, props.className)}
        type={props.type}
        onClick={props.handleClick}>
        {props.title}{props.adtitle}
        </button>
)};

const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#400D02',
        fontFamily: 'Helvetica',
        fontSize: '3vh',
        color: '#ffffff',
        padding: '1vh',
        borderRadius: '8px',
        border: 'none',
        margin: '1vh',
        outline: 'none',
    },
   });

export default Button;