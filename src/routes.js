import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Home from './components/Home';


const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);
export default Routes;
