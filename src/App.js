import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={LandingPage}/> */}
        <Route exact path="/" component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
