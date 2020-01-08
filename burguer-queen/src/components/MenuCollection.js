import React, {useState, useEffect} from 'react';
//import Title from './Title';
import firebase from '../utils/firebaseUtil';
import Card from './Card';
import {StyleSheet, css} from 'aphrodite';
import Button from './Button';


function Lunch(props) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {

    firebase.firestore()
    .collection('Menu')
     .get().then((doc => {
       const teste = doc.docs.map((snap) => ({
         ...snap.data()
 
       }))
       console.log(teste)
       setMenu(teste)
     }))
  }, [])

  return(
      <section className={css(styles.lunch)}>
      <div>
           <Button title={'Café da Manhã'}/>    
              {menu.map((item, index)=> item.breakFast ===true ?
               <>
               <Card 
                  key={index}
                  name={item.name} 
                  price={item.price}/>
                 <Button title={'Adicionar'} handleClick={()=> props.addItens}/> </>: false)}
                  
      </div>
           <div>
              <Button title={'Lanches'}/>
                 {menu.map((item, index)=> item.breakFast !==true ?
                 <>
                  <Card 
                       key={index}
                       name={item.name} 
                       price={item.price}/>
                  <Button title={'Adicionar'} handleClick={()=> props.addItens}/> </>: false)}
          </div>
      </section>
  )
}

const styles = StyleSheet.create({
  lunch:{
  
},
});  

export default Lunch;