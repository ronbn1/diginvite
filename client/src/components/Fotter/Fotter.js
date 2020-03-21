import React from "react";
import styled from "styled-components";

const Fotter = () => {
  return (
    <Container>
      <p>
        &copy; Another thing from{" "}
        <a target="_blank" href="https://ronbenaish.netlify.com/">
          Ron Benaish
        </a>
      </p>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 2em;
  background-color: #2e2e39;
  p {
    color: white;
    padding: 1em;
    font-size: 0.7em;
  }
`;
export default Fotter;
