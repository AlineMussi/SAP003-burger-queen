import React, {useState, useEffect} from 'react'
import Title from '../components/Title';
import firebase from '../utils/firebaseUtil';
import Request from '../components/Request';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import {StyleSheet, css} from 'aphrodite';
// import Breakfast from '../components/Breakfast';


function Menu () {
    const [menu, setMenu] = useState([]);
    const [itens,setItens] = useState([]);
    const [client,setClient] = useState('');
    const [table,setTable] = useState('');
    //const [total, setTotal] = useState(0);

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
      

const sendRequest = () => {

  firebase.firestore().collection("command")
  .add({
    client,
    table,
    itens:itens.map(function(i) { return { name: i.name, qtd: i.count } }),
    timestamp: new Date().toLocaleString('pt-BR'),
  })
  .then(() => 
  setClient(''),
  setTable (''),
  setItens([]),
  )}
  
    const addItens = (firstItem) => {
    const findItem = itens.find(item => item.name === firstItem.name)
    if (findItem) {
        findItem.qtd++;
        setItens([...itens])
    }
    else {
        firstItem.qtd = 1;
        setItens([...itens, firstItem])
        console.log(firstItem)
    }
}

const total = itens.reduce((acumulador, item) => {
  return acumulador + (item.price * item.qtd);
}, 0)

const removeItem = (product) => {
  const findIndex = itens.findIndex(item => item.name === product.name)
  if (itens[findIndex].qtd > 1) {
    console.log(findIndex)
    itens[findIndex].qtd--
      setItens([...itens])
  }
}

const deleteItem = (item) => {
  const index = (itens.indexOf(item))
  console.log(index)
  itens.splice(index, 1)
  setItens([...itens])
}

  return(
    <>
    <header className={css(styles.header)}>
         <Title title={'Cardárpio'}/>
    </header>

      <section className={css(styles.sectionMenu)}>
          <div className={css(styles.divBreakfast)}>
                <Title title={'Café da Manhã'}/>    
                    {menu.map((item, index)=> item.breakFast ===true ?
                    <>
                  <Card 
                      key={index}
                      name={item.name} 
                      price={item.price}/>
                    <Button title={'+'} handleClick={() => addItens(item)}/>
                    <Button title={'-'} handleClick={() => removeItem(item)}/> </>: false)}
                        
          </div>
            
          <div className={css(styles.divLunch)}>
               <Title title={'Lanches'}/>
                  {menu.map((item, index)=> item.breakFast !==true ?
                 <>
                  <Card 
                       key={index}
                       name={item.name} 
                       price={item.price}/>
                  <Button  title={'+'} handleClick={() => addItens(item)}/>
                  <Button title={'-'} handleClick={() => removeItem(item)}/> </>: false)}
         </div>
      </section>
      

      <div>
           <Title title={'Pedido'}/>
                {itens.map((item, index) =>
                <>
                <Card
                      key={index}
                      name={item.name}
                      price={item.price}/></>
                )}
      <div>
      <div>
      <form>
          <label htmlFor='Cliente'>Cliente</label>
                <Input
                type={'text'}
                placeholder={'Cliente'}
                handleChange={e => setClient(e.currentTarget.value)}/>
          <label htmlFor="table">Mesa</label>
                <Input
                type={'number'}
                placeholder={'Mesa'}
                handleChange={e => setTable(e.currentTarget.value)}/>
      </form>
      </div>
      <div>
          <section>
                    {itens.map((item, index) => 
                        <div>
                            <Card 
                                key={index}
                                qtd={item.qtd}
                                price= {item.price * item.qtd} 
                                name={item.name}/>
                             <Button title={'+'} handleClick={() => addItens(item)}/>
                             <Button title={'-'} handleClick={() => removeItem(item)}/> 
                            
                         </div> )}
              </section>
      </div>
      </div>
              <Request
              request={sendRequest}
              deleteItem={deleteItem}
              total={total} 
               />
        </div>
        </>
    )
  }

  const styles = StyleSheet.create({

header:{
 textAlign: 'center',
},

divBody:{
  margin: '0',
  padding: '0',
  justifyContent: 'column',
  textAlign: 'center',
},

sectionMenu:{
  textAlign: 'center',
},

divBreakfast:{
  textAlign: 'center',      
},      
 divLunch:{
  textAlign: 'center',
},      

Button:{
        margin: '0',
        width: '5px',
        height: '1px',
        padding: '8px',
},

})

export default Menu;