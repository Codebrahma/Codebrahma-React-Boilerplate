import React, { Component } from 'react';
import {Switch,Route, BrowserRouter as Router } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
class Routes extends Component {
    render(){
        return(
            <Router>
            <Switch>
                <Route path='/' component={Home} exact={true}/>
                <Route path='/dashboard' component={Dashboard}/>
            </Switch>
            </Router>
        )
    }
}
export default Routes;