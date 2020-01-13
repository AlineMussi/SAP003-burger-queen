import React from 'react';
import burger from '../../pages/img/burger.png/';
import {StyleSheet, css} from 'aphrodite';

const Img = () => {

    return(
        <div>
            <img className={css(styles.img)} src={burger} alt='burger'/>
        </div>

    )
}

const styles = StyleSheet.create({
img:{
    width: '50vw',
},
})

//export default Img;