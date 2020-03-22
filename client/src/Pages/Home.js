import React, { useContext } from "react";
import Routes from "../Routes/Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Context from "../Context";
import SweetAlert from "react-bootstrap-sweetalert";
import MySpinner from "../components/Spinner/Spinner";
const Home = () => {
  const context = useContext(Context);

  return (
    <div>
      {context.errors && context.errors.type === "warning" && (
        <SweetAlert
          warning
          confirmBtnBsStyle="danger"
          title={context.errors.msg}
          onConfirm={context.removeError}
        ></SweetAlert>
      )}
      {context.errors && context.errors.type === "success" && (
        <SweetAlert
          success
          confirmBtnBsStyle="danger"
          title={context.errors.msg}
          onConfirm={context.removeError}
        ></SweetAlert>
      )}

      {context.spinner && <MySpinner />}

      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default Home;
