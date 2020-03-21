import React, { useState, useEffect, useContext } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import styled from "styled-components";
import Context from "../../Context";
import Img1 from "../../assets/bg-1.jpg";
import Img2 from "../../assets/bg-2.jpg";
import Img3 from "../../assets/bg-3.jpg";

const ChangeImage = ({ handleClose }) => {
  const context = useContext(Context);
  const initialState = { img1: "", img2: "", img3: "" };
  const [selectedImg, setSelectedImg] = useState(initialState);
  const [imageSrc, setImageSrc] = useState();

  const onSelect = num => {
    const img = `img${num}`;
    setSelectedImg({ ...initialState, [img]: "selected" });
    setImageSrc(`bg-${num}.jpg`);
  };

  const onSubmit = () => {
    context.updateUserImage(imageSrc);
    handleClose();
  };
  return (
    <Container>
      <p className="title">בחר תונה</p>
      <_DialogContent>
        <img
          onClick={e => onSelect("1")}
          src={Img1}
          className={`${selectedImg.img1}`}
          alt="header image"
        />
        <img
          onClick={e => onSelect("2")}
          src={Img2}
          className={`${selectedImg.img2}`}
          alt="header image"
        />
        <img
          onClick={e => onSelect("3")}
          src={Img3}
          className={`${selectedImg.img3}`}
          alt="header image"
        />
      </_DialogContent>
      <DialogActions>
        <BtnGroup>
          <Button type="submit" color="primary" onClick={onSubmit}>
            שנה
          </Button>
          <Button onClick={handleClose} color="primary" dir="rtl">
            ביטול
          </Button>
        </BtnGroup>
      </DialogActions>
    </Container>
  );
};

const Container = styled.div`
  .title {
    color: #ed7777;
    padding: 1em 0 0.5em 0;
    text-align: center;
    font-size: 1.5em;
  }
`;
const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Button = styled.button`
  background: transparent;
  border: 1px solid #cccccc;
  margin: 0.2em;
  border-radius: 0.2em;
`;

const _DialogContent = styled(DialogContent)`
  overflow-y: initial !important;
  display: flex;

  .selected {
    padding: 0.1em;
    border: 2px solid #ed7777;
    transform: scale(1.2);
  }
  img {
    margin: 1em;
    max-width: 15em;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export default ChangeImage;
