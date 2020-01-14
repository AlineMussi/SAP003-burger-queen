import React, {useState, useEffect} from 'react';
import {StyleSheet, css} from 'aphrodite';
import firebase from '../utils/firebaseUtil';
import Title from '../components/Title';
import Button from '../components/Button';
import {Link} from 'react-router-dom';

function Delivery() {
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


  const finish = (item) => {
      
      firebase.firestore()
      .collection('command')
      .doc(item.id)
      .update({
       // status: 'finished',
        timestamp: new Date().toLocaleString('pt-BR'),
      })
      .then(() => {
        setItens([...itens])
        window.location.reload();
        alert('Pronto para servir')
    })
}

return (
    <main  className={css(styles.main)}>
      <Title title={'Pedidos prontos'} />
    <hr/>
    
    <section className={css(styles.inProgress)}>
      {itens.map((item) => (
      (item.status === 'toDeliver')?
      
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
        title={'🍲'} 
        handleClick={() => finish(item)} />
      </section>
      : <></>
    ))}
     <Link to='/menu'><Button title="Voltar"/></Link>

      </section>
    
    </main>
  )
}  

const styles = StyleSheet.create({
})

export default Delivery;