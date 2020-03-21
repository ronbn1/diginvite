import React from "react";
import styled from "styled-components";
const Navigation = ({ address, name }) => {
  return (
    <Container>
      <div className="navigation">
        <a href={`https://waze.com/ul?q=${address}%20${name}`}>
          <div className="waze">
            <i className="fab fa-waze"></i>
            <p>ניווט בוויז</p>
          </div>
        </a>
        <div className="waze">
          <i className="fas fa-map-marker-alt"></i>
          <p>ניווט בגוגל </p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .navigation {
    display: flex;
    justify-content: center;
    div {
      padding: 2em;
      display: flex;
      flex-direction: column;
      p {
      }
    }
    i {
      text-align: center;
      font-size: 2em;
    }
  }
  @media (max-width: 600px) {
  }
`;
export default Navigation;
