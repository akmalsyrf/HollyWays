import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// pages
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import RaiseFund from "./pages/RaiseFund";
import DetailDonate from "./pages/DetailDonate";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={LandingPage}/> */}
        {/* <Route exact path="/" component={Profile}/> */}
        {/* <Route exact path="/" component={RaiseFund} /> */}
        <Route exact path="/" component={DetailDonate} />
      </Switch>
    </Router>
  );
}

export default App;
