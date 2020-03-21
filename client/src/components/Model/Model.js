import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import styled from "styled-components";
import { LOGIN, REGISTER, EDIT, CHANGE_IMAGE } from "../../utils/types";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EditMod from "../EditMod/EditMod";
import ChangeImage from "../ChangeImage/ChangeImage";

const Model = ({ handleClose, open, data, mode, msg }) => {
  const currentMod = () => {
    switch (mode) {
      case LOGIN:
        return <Login handleClose={handleClose} />;
      case REGISTER:
        return <Register handleClose={handleClose} />;
      case EDIT:
        return <EditMod data={data} handleClose={handleClose} />;
      case CHANGE_IMAGE:
        return <ChangeImage handleClose={handleClose} />;
      default:
        return (
          <DialogContent style={{ textAlign: "center", padding: "3em" }}>
            <p> {msg}</p>
          </DialogContent>
        );
    }
  };

  return (
    <MyDialog open={open} onClose={handleClose} maxWidth="xl" dir="rtl">
      {currentMod()}
    </MyDialog>
  );
};

const MyDialog = styled(Dialog)`
  overflow: hidden !important;
  .MuiDialog-paperWidthXl {
    min-width: 21em;
  }

  .title {
    color: #ed7777;
    padding: 1em 0 0.5em 0;
    text-align: center;
    font-size: 1.5em;
  }
  .content {
    text-align: center;
  }
`;

export default Model;
