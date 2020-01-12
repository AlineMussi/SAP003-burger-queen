import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function List(props){
    return(
        <div className={css(styles.card)} onClick={props.handleClick}>
            <ol>
            <ul>{props.id}</ul>
            <ul> {props.table}</ul>
            <ul>{props.timestamp}</ul>
            <ul>{props.qtd}</ul>
            <ul>{props.name}</ul>
            <ul>R$ {props.price}</ul>
            <ul>{props.client}</ul>
            <ul>{props.total}</ul>
            <ul>{props.img}</ul>
            </ol>
       </div>
    )};

    const styles = StyleSheet.create({
        list:{
        },
     });  

    export default List;