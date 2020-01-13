import React from 'react';
import Home from './pages/home';
import Menu from './pages/menu';
import Kitchen from './pages/cozinha';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './pages/index.css';
import Delivery from './pages/delivery';

function App() {
    return(
    <Router>
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/menu' component={Menu}/>
            <Route path='/cozinha' component={Kitchen}/>
            <Route path='/delivery' component={Delivery}/>
        </Switch>
    </Router>
    )};

export default App;