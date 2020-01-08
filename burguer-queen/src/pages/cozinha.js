import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import db from '../utils/firebaseUtil';
//import Button from '../components/Button';
//import Lunch from '../components/Lunch';
//import Breakfast from '../components/Breakfast';

function Kitchen() {

  const [menu, setMenu] = useState([]);

  useEffect(() => {


    db.collection('Breakfast')
     .get().then((doc => {
       const teste = doc.docs.map((snap) => ({
         ...snap.data()
 
       }))
       console.log(teste)
       setMenu(teste)
     }))
     return
  }, [])

  return (
    <>
    <h1>Cozinha</h1>
    {
        menu.map((item) => 
        <>
        <button>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </button>
        </>
      )
      } 
      <button type='image'>
           <Link to='/'>Voltar</Link>
      </button>
    </>
  );
    
}

export default Kitchen;