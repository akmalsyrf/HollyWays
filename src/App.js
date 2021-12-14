import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </Router>
  );
}

export default App;
