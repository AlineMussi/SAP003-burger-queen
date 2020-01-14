import React, {useState, useEffect} from 'react';
import {StyleSheet, css} from 'aphrodite';
import firebase from '../utils/firebaseUtil';
import Title from '../components/Title';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Kitchen() {
    const [itens, setItens] = useState([]);
    
  
useEffect(() => {
    firebase.firestore()
    .collection('command')
    .orderBy('timestamp', 'asc')
    .get()
    .then(
      querySnapshot => {
        const newOrders = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()}))
          setItens(newOrders)
        }
      )
    },
    []
  );


  const init = (item) => {
      
      firebase.firestore()
      .collection('command')
      .doc(item.id)
      .update({
        status: 'toDeliver',
        timestamp: new Date().toLocaleString('pt-BR'),
      })
      .then(() => {
        setItens([...itens])
        window.location.reload();
        alert('Prato finalizado')
    })
}

return (
    <main  className={css(styles.main)}>
      <Title title={'Pedidos'} />
    <hr/>
    
    <section className={css(styles.inProgress)}>
      {itens.map((item) => (
      (item.status === 'inProgress')?
      
      <section>
          <p><strong>Mesa: {item.table} Realizado em: {item.timestamp}</strong></p>
      <hr/>
      
      {item.itens.map((item) => (
        <div>
          
          <p> <strong> Qtd: </strong>{item.qtd} {item.name}
              <strong> Adicionais: </strong>{item.extras}
              <strong> Opção de carne: </strong>{item.options}
          </p>
        
          <hr/>
        </div>
      ))}
      <Button 
        title={'✅'} 
        handleClick={() => init(item)} />
      </section>
      : <></>
    ))}
     <Link to='/menu'><Button title="Voltar"/></Link>
     <Link to='/delivery'><Button title="Entregas"/></Link>
      </section>
    
    </main>
  )
}  

const styles = StyleSheet.create({
})

export default Kitchen;