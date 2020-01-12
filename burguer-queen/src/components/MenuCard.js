import React from 'react';
import Card from './Card';
import {StyleSheet, css} from 'aphrodite';


function MenuCard(props){
   return props.state.map((item, index) =>
    <Card className={css(styles.MenuCard)}
      key={index} 
      title={props.title} 
      adtitle={props.adtitle} 
      handleClick={() => props.function(item)} 
      name={item.name} 
      price={item.price} />
  );
}

const styles = StyleSheet.create({
 MenuCard:{
 },
});

export default MenuCard;

