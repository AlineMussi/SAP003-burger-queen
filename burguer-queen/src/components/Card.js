import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function Card(props){
    return(
        <div className={css(styles.card)} onClick={props.handleClick}>
            <p>{props.id}</p>
            <p>{props.table}</p>
            <p>{props.timestamp}</p>
            <p>{props.qtd}</p>
            <p>{props.name}</p>
            <p> R${props.price}</p>
            <p>{props.client}</p>
            <p>{props.total}</p>
            <p>{props.img}</p>
       </div>
    )};

    const styles = StyleSheet.create({
        card:{
         backgroundColor: '#ffffff',
         boxShadow: '0 0 0.5em lightgray',
         borderRadius: '8px',
         border: '4px',
         textAlign: 'center',
         padding: '10px',
         margin: '1vh',
         flexWrap: 'wrap',
         width: '90px',
         height: '100px',
        },
     });  

    export default Card;