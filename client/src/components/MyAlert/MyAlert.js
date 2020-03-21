import React from "react";
import Alert from "react-bootstrap/Alert";
import styled from "styled-components";
const MyAlert = ({ msg, type }) => {
  return <StyledAlert variant={type}>{msg}</StyledAlert>;
};

const StyledAlert = styled(Alert)`
  position: absolute;
  top: 0;

  z-index: 10;
`;

export default MyAlert;
