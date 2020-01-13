import React from 'react';

import {StyleSheet, css} from 'aphrodite';
import Button from './Button';



function List(props){
    return(
        <div className={css(styles.list)} onClick={props.handleClick}>
            <p>{props.id}</p>
            <p> {props.table}</p>
            <p>{props.timestamp}</p>
            <p>{props.qtd}</p>
            <p>{props.item.name}</p>
            <p>R$ {props.price}</p>
            <p>{props.client}</p>
            <p>{props.total}</p>
            <p>{props.img}</p>

            {(props.item.name === "Hamburguer")
                ?
                <>
                <div> 
                    Extras:
                    {props.menuExtras.map((extra, index) => {
                        const isButtonSelected = props.item.extras && props.item.extras.includes(extra.name + '');
                        return <Button
                            className={isButtonSelected ? styles.selectedButton : ""}
                            key={index} 
                            type='button' 
                            title={extra.icon} 
                            handleClick={() => props.addExtraToItem(props.item, extra.name)}/>
                            })
                    }
                </div>
                <div>
                    Opções:
                    {props.menuOption.map((option, index) => {
                        const isButtonOptionSelected = props.item.options && props.item.options.includes(option.name + '');
                        return <Button
                            className={isButtonOptionSelected ? styles.selectedButton : ""}
                            key={index} 
                            type='button' 
                            title={option.icon} 
                            handleClick={() => props.addOptionToItem(props.item, option.name)}/>
                            })
                    }
                </div>
                </>
                : null
            }     
       </div>
    )};

    const styles = StyleSheet.create({
        list:{
         backgroundColor: '#ffffff',
         boxShadow: '0 0 0.5em lightgray',
         borderRadius: '8px',
         border: '4px',
         padding: '0',
         margin: '1vh',
        },
        selectedButton: {
            backgroundColor: "#ffff7d",
            display:'inline-block'
        }
     });  

    export default List;