import React from 'react';
import Button from './Button';
//import Card from './Card';


function Request(props){
  const sendRequest = props.sendRequest;
  const deleteItem = props.deleteItem;

 return(
        <>
      <div>
         <p>R$ {props.total} ,00</p>
           <Button
              title={"Enviar"}
              handleClick={(e) => {
                props.sendRequest(sendRequest);
                e.preventDefault();
              }}/>
            <Button
              title={"Deletar"}
              handleClick={(e) => props.deleteItem(deleteItem)} />
         
       </div>
       </>
)}


export default Request;