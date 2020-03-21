import React from "react";
import styled from "styled-components";
const Fotter = () => {
  return (
    <Container>
      <p>
        הזמנה דיגיטלית זו נוצרה ב-❤️ על ידי
        <a href="/">
          {" "}
          <span>DIGI</span>nvite
        </a>
      </p>
    </Container>
  );
};
const Container = styled.div`
  height: 3em;
  background-color: #2e2e39;

  p {
    text-align: center;
    color: white;
    line-height: 3em;
    span {
      color: #ed7777;
    }
  }
`;
export default Fotter;
