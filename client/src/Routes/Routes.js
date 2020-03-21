import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Example from "../components/Example/Example";
import InviteManagement from "../Pages/InviteManagement";
import Generator from "../components/Generators/Generator";
import Context from "../Context";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  const context = useContext(Context);

  return (
    <Switch>
      <Route exact path="/">
        {context.userState.id ? (
          <Redirect to={"/invite/" + context.userState.id} />
        ) : (
          <LandingPage />
        )}
      </Route>
      <PrivateRoute path="/dashboard" component={InviteManagement} />
      <Route path="/invite/example" component={Example} />
      <Route path="/invite/:id" component={InviteManagement} />
    </Switch>
  );
};

export default Routes;
