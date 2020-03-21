import React, { useContext } from "react";
import NavBar from "../components/NavBar/NavBar";
import Routes from "../Routes/Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyAlert from "../components/MyAlert/MyAlert";
import Context from "../Context";
import styled from "styled-components";
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
