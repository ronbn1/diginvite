import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../Context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const context = useContext(Context);

  return (
    <Route
      {...rest}
      render={props => {
        return !context.userState.id && !context.userState.loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};
export default PrivateRoute;
