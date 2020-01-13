import React, {useState, useEffect} from 'react'
import {StyleSheet, css} from 'aphrodite';
import {Link} from 'react-router-dom';
import firebase from '../utils/firebaseUtil';
import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';
import MenuCard from '../components/MenuCard';
import Request from '../components/Request';
import List from '../components/list';


function Menu () {
    const [menu, setMenu] = useState([]);
    const [menu1, setMenu1] = useState([]);
    const [menu2, setMenu2] = useState([]);
    const [itens,setItens] = useState([]);
    const [client,setClient] = useState('');
    const [table,setTable] = useState('');

   useEffect(() => {
      firebase.firestore()
        .collection('Menu')
        .where('breakFast', '==', true)
        .get().then(snapshot => {
          snapshot.forEach(doc => {
            setMenu1((currentState) => [...currentState, doc.data()])
          })
        })
      firebase.firestore()
        .collection('Menu')
        .where('breakFast', '==', false)
        .get().then(snapshot => {
          snapshot.forEach(doc => {
            setMenu2((currentState) => [...currentState, doc.data()])
          })
        })
    }, [])
  
      

  const addItens = (firstItem) => {
    const findItem = itens.find(item => item.name === firstItem.name)
    if (findItem) {
        findItem.qtd++;
        setItens([...itens])
    }
    else {
        firstItem.qtd = 1;
        setItens([...itens, firstItem])
    }
}



const total = itens.reduce((acumulador, item) => {
  const extraPrice = (item.extras && item.extras.length !== 0) ? item.extras.length : 0;
  return acumulador + ((item.price + extraPrice) * item.qtd);
}, 0)



const removeItem = (product) => {
  const findIndex = itens.findIndex(item => item.name === product.name)
  if (itens[findIndex].qtd > 1) {
    itens[findIndex].qtd--
      setItens([...itens])
  } else {
    itens.splice(findIndex, 1)
    setItens([...itens])
  }
}

const deleteItem = (item) => {
  const index = (itens.indexOf(item))
  itens.splice(index, 1)
  setItens([...itens])
}


const sendRequest = () => {

  if(client && table){
    alert('Pedido enviado à cozinha')
  firebase.firestore().collection("command")
  .add({
    client,
    table,
    itens,
    status: 'inProgress',
    timestamp: new Date().toLocaleString('pt-BR'),
  })
  .then(() => 
  setClient(''),
  setTable (''),
  setItens([]),
  )} else if (!client){
    alert('Preencha todos os campos antes de enviar')
  } else if (!table){
    alert('Preencha todo os campos antes de enviar')
  }
}



const addExtraToItem = (product, extra) => {
  const newItens = itens.map((item) => {
    if (item.name === product.name) {
      let newExtra = []
      if (item.extras === undefined || item.extras.length === 0) {
        newExtra = [extra]
        } else {
        newExtra = item.extras;
        const index = newExtra.indexOf(extra);
        if (index === -1) {
          newExtra = [...newExtra, extra]
        } else {
          newExtra.splice(index, 1)
        }
      }
      return {
        ...item,
        extras: newExtra
      };
    } else {
      return item
    }
  });
  setItens(newItens)
}

const menuExtras = [{name: ' ovo ', icon: '🧀'}, {name: ' queijo ', icon: '🍳'}];
const menuOption = [{name: ' veggie ', icon: '🥬'}, {name: ' frango ', icon: '🐔'}];

const addOptionToItem = (product, option) => {
  const newOption = itens.map((item) => {
    if (item.name === product.name) {
      let newOption = []
      if (item.option === undefined || item.options.length === 0) {
        newOption = [option]
        } else {
        newOption = item.options;
        const index = newOption.indexOf(option);
        if (index === -1) {
          newOption = [...newOption, option]
        } else {
          newOption.splice(index, 1)
        }
      }
      return {
        ...item,
        options: newOption
      };
    } else {
      return item
    }
  });
  setItens(newOption)
}

return(
    <>
    <header className={css(styles.header)}>
         <Title title={'Cardárpio'}/>
    </header>

    <main className={css(styles.main)}>

                <section className={css(styles.secInput)}>
                    <Input 
                        placeholder={'Nome do Cliente'}
                        type={'text'}
                        value={client}
                        handleChange={(e) => {setClient(e.currentTarget.value)}} />
                    <Input 
                        placeholder={'Mesa'}
                        type={'number'}
                        value={table}
                        handleChange={(e) => {setTable(e.currentTarget.value)}} />
                </section>
                
                <section className={css(styles.menuChoice)}>
                    <Button
                       handleClick={() => setMenu(true)} title='BreakFast' />
                    <Button
                        handleClick={() => setMenu(false)} title='Burgers' />
                </section>

                {menu ? 
                <section className={css(styles.menuCategory)} > 
                    <MenuCard state={menu1} title={'+'} function={addItens} />
                </section> :
                <section className={css(styles.menuCategory)} > 
                    <MenuCard state={menu2}  title={'+'} function={addItens} />
                </section>} 
      <div className={css(styles.divTitleRequest)}>
          <Title title={'Pedido'}/>          
      <hr/>      
      <div>
   
      <div>
          <section className={css(styles.secList)}>
                    {itens.map((item, index) => 
                        <div className={css(styles.divList)}>
                            <List
                                key={index}
                                qtd={item.qtd}
                                price= {item.price * item.qtd} 
                                item={item}
                                menuExtras={menuExtras}
                                menuOption={menuOption}
                                addExtraToItem={addExtraToItem}
                                addOptionToItem={addOptionToItem}/>
                             <Button title={'-'} handleClick={() => removeItem(item)}/>  
                         </div> )}
              </section>
      </div>
      </div>
         <section className={css(styles.request)}>
            <h2>Total:</h2> 
            <Request
            total= {total}
            sendRequest={sendRequest}
            deleteItem={deleteItem}
            />
            <Link to='/cozinha'> <Button title="👨‍🍳"/> </Link>
          </section>
      </div>
    </main>
    </>
    )
  }

const styles = StyleSheet.create({

header:{
  textAlign: 'center',
  },

main:{
  display: 'flex',
  flexFlow: ['columm', 'wrap'],
  padding: '1vw',
  justifyContent: 'center',
},

secInput:{
  flexWrap: 'wrap',
  justifyContent: 'center',
  fontFamily: 'Helvetica',
},

menuChoice: {
  display: 'flex',
  justifyContent: 'center',
  width:'50vw',
},

menuCategory: {
  display: 'flex',
  flexDirection: 'wrap',
  fontFamily: 'Helvetica',
  flexWrap: 'wrap',
  justifyContent: 'center',
},

secList: {
  display: 'flex',
  flexDirection: 'nowwrap',
  fontFamily: 'Helvetica',
},

divList:{
  alignContent: 'center',
  flexWrap: 'wrap',
},

listButton: {
  display: 'flex',
  justifyContent: 'center',
},

selectedButton: {
  backgroundColor: "#ffff7d"
},

divTitleRequest:{
  textAlign: 'center',
},

request: {
  textAlign: 'center',
},

});

export default Menu;