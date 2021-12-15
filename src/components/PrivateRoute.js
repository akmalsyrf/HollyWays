import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // assume that user is not login yet
  const [state] = useContext(UserContext);

  return (
    <>
      <Route {...rest} render={(props) => (state.isLogin ? <Component {...props} /> : <Redirect to="/" />)} />
    </>
  );
};

export default PrivateRoute;
