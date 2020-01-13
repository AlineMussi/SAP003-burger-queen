import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import hamburger from './img/hamburger.svg';

function Home () {
    return (
        <>
    <main className={css(styles.main)}>
        <div>
            <h1 className={css(styles.title)}>Burger Queen</h1>
            <img className={css(styles.image)} src={hamburger}/>
        </div>

        <div className={css(styles.container)}>
            <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet"/>
            <Link to='/cozinha'><Button title="cozinha"/></Link>
            <Link to='/menu'><Button title="menu"/></Link>
            <Link to='/delivery'><Button title="delivery"/></Link>
        </div>
      </main> 
        </>
)};

const styles = StyleSheet.create({
    main: {
        marginTop: '20%',
        textAlign: 'center',
    },

    container: {
        display: 'flex',
        flexDirection: 'wrap',
        fontFamily: 'Helvetica',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '1vw',
    },
    
   title: {
        fontFamily: ['Great Vibes', 'cursive'],
        fontSize:'15vw',
        color: 'brown',
        textAlign: 'center',
        marginBottom: '30px',
    },

    image: {
        width: '30vw',
        height: '30vw',
        marginBottom: '2vw',
    },

});

export default Home;