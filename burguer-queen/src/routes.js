import React from 'react';
import Home from './pages/home';
import Menu from './pages/menu';
import Kitchen from './pages/cozinha';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return(
    <Router>
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/menu' component={Menu}/>
            <Route path='/cozinha' component={Kitchen}/>
        </Switch>
    </Router>
    )};

export default App;