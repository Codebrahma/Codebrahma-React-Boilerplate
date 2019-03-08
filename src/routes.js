import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const render = Comp => props => (<Comp {...props} />);
const Dashboard = render(lazy(() => import('./components/Dashboard')));
const Home = render(lazy(() => import('./components/Home')));

const Routes = () => (
  <div>
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Suspense>
  </div>
);
export default Routes;
