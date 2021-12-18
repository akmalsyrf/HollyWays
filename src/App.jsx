import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import NavBar from "./components/NavBar";

// pages
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import RaiseFund from "./pages/RaiseFund";
import DetailDonate from "./pages/DetailDonate";
import MakeFund from "./pages/MakeFund";
import NotFound from "./pages/NotFound";
import ViewFund from "./pages/ViewFund";

//context
import PrivateRoute from "./context/PrivateRoute";

function App() {
  // const [state, dispatch] = useContext(UserContext);
  // const token = window.sessionStorage.getItem("token");
  // useEffect(() => {
  //   console.log(token);
  //   if (String(token) === "Authenticated") {
  //     dispatch({ type: "AUTHENTICATED" });
  //   } else {
  //     return null;
  //   }
  // });
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/detail-donate/:id" component={DetailDonate} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/raise-fund" component={RaiseFund} />
        <PrivateRoute exact path="/view-fund/:id" component={ViewFund} />
        <PrivateRoute exact path="/make-fund" component={MakeFund} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
