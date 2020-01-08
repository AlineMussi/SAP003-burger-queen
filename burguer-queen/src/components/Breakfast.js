import React from 'react';
import Lunch from './Lunch';
import Card from './Card';

function Breakfast(props){
    const lunchMenu = Lunch();

    return(
        <div>
        {lunchMenu.map((item)=> item.breakfast === true ?
                 <Card name={item.name} handleClick={()=> console.log(item)}/> : false)}
        </div>
    )}
      
export default Breakfast;