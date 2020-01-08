import React from 'react';
import Button from './Button';
import Card from './Card';


function Request(props){

 return(
        <>
      <div>
         <Card total={props.total}/>
           <Button
              title={"Enviar pedido"}
              onClick={() => props.sendRequest} />
            <Button
              title={"Deletar pedido"}
              onClick={() => props.deleteItem} />
         
       </div>
       </>
)}


export default Request;