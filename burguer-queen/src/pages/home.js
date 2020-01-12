import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import Img from './img/img';

function Home () {
    return (
      <div className={css(styles.body)}>
          <Img />
          <link href="https://fonts.googleapis.com/css?family=Bad+Script&display=swap" rel="stylesheet"/>
          <Link to='/cozinha'><Button title="cozinha"/></Link>
          <Link to='/menu'><Button title="menu"/></Link>
        </div>
)};

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
        backgroundColor: 'black',
        color:'white',
        borderColor: 'transparent',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '5px',
        padding: '15px 32px',
    },

    // title: {
    //     fontFamily: ['Bad script', 'cursive'],
    //     fontSize:'15vh',
    // }

});

export default Home;