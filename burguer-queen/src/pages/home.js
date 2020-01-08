import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Button from '../components/Button';
import {Link} from 'react-router-dom';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF',
        // display: 'flex',
        // minHeight: '100vh',
        width: '100%',
        margin: '0',
        padding: '0',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign:'center',
    },
    
    btn: {
        backgroundColor: '#ff1a1a',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '0 auto',
        padding: '15px 32px',
    },
});

function Home () {
    return (
      <>
      <div className={css(styles.body)}>
          <h1>Home</h1>
            <Button class={css(styles.btn)} title={<Link to='/Cozinha'>Cozinha</Link>}/>
            <Button class={css(styles.btn)} title={<Link to='/Menu'>Menu</Link>}/>
        </div>
      </>
    )};

export default Home;