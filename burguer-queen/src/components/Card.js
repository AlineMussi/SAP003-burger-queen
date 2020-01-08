import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
   card:{
    backgroundColor: '#ffd596',
    borderRadius: '8px',
    boxShadow: '15px',
    textAlign: 'center',
    padding: '0',
    margin: '1%',
    marginLeft: '40%',
    marginRight: '40%',
   },
});  

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
       </div>
    )};

    export default Card;