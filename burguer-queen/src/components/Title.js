import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function Title(props){
    return(
        <>
        <link href="https://fonts.googleapis.com/css?family=Bad+Script&display=swap" rel="stylesheet"/>
        <h1 className={css(styles.title)}>
        {props.title}{props.adtitle}
        </h1>
        </>
    )};

    const styles = StyleSheet.create({
        title:{
            fontFamily: ['Bad script', 'cursive'],
        },
       });

    export default Title;