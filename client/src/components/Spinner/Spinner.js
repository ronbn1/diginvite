import React from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const MySpinner = () => {
  return (
    <Container>
      <_Spinner
        type="Puff"
        color="#ed7777"
        height={100}
        width={100}
        //3 secs
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: #eeeeeea0;
  position: absolute;
  z-index: 10000;
`;
const _Spinner = styled(Loader)`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 10000;
`;
export default MySpinner;
