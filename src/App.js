import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import RaiseFund from './pages/RaiseFund'

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={LandingPage}/> */}
        {/* <Route exact path="/" component={Profile}/> */}
        <Route exact path="/" component={RaiseFund}/>
      </Switch>
    </Router>
  );
}

export default App;
