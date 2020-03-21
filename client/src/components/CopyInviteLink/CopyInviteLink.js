import React, { useState, useContext, useRef } from "react";
import styled from "styled-components";
import Context from "../../Context";
import Model from "../Model/Model";
const CopyInviteLink = ({ id }) => {
  const context = useContext(Context);
  const linkInput = useRef(null);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const link = `http://localhost:3000/invite/${context.userState.id}`;
  const copyFunction = () => {
    linkInput.current.select();
    linkInput.current.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setIsModelOpen(true);
  };
  return (
    <Container>
      <p>קישור להזמנה :</p>
      <input ref={linkInput} type="text" value={link} />
      <p className="copy" onClick={copyFunction}>
        לחץ כאן להעתיק את הקישור
      </p>
      {isModelOpen && (
        <Model
          open={isModelOpen}
          handleClose={e => setIsModelOpen(false)}
          msg="הקישור הועתק !"
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .copy {
    cursor: pointer;
  }
  p {
    margin: 1em;
  }
  input {
    max-width: 100vw;
    width: 30em;
    text-align: center;
    padding: 1em;
  }
`;
export default CopyInviteLink;
