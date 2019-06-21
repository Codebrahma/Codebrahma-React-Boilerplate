import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Home = lazy(() => import('./components/Home'));

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
