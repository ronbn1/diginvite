import React, { useState, useEffect, useContext } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import styled from "styled-components";
import Context from "../../Context";
const EditMod = ({ handleClose, data }) => {
  const context = useContext(Context);

  const [editForm, setEditForm] = useState(data);

  const handleEdit = e => {
    if (e.target.name === "imageSrc") {
      setEditForm({ ...editForm, imageSrc: e.target.files });
    } else {
      setEditForm({ ...editForm, [e.target.name]: e.target.value });
    }
  };
  const onSubmit = () => {
    context.updateUserData(editForm);
  };

  return (
    <Container>
      <p className="title">עידכן פרטים</p>

      <form
        onSubmit={e => {
          e.preventDefault();
          handleClose();
          onSubmit(editForm);
        }}
      >
        <Group dir="rtl">
          <div className="_row">
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="email"
                value={editForm.email}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">אימייל</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="phone"
                value={editForm.phone}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">טלפון</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="groomName"
                value={editForm.groomName}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">שם החתן</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="brideName"
                value={editForm.brideName}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">שם הכלה</span>
            </label>
          </div>
          <div className="_row">
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="hallName"
                value={editForm.hallName}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">שם אולם האירועים</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="hallAddress"
                value={editForm.hallAddress}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">כתובת אולם האירועים</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="eventDate"
                value={editForm.eventDate}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">תאריך האירוע</span>
            </label>

            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="greetingTime"
                value={editForm.greetingTime}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">שעת קבלת פנים</span>
            </label>
          </div>
          <div className="_row">
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="weddingTime"
                value={editForm.weddingTime}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">שעת חופה</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="bridePName"
                value={editForm.bridePName}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">שם הורי הכלה</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="groomPName"
                value={editForm.groomPName}
                onChange={e => handleEdit(e)}
                required
              />
              <span dir="rtl">שם הורי החתן</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                className="fileInput_top"
                dir="rtl"
                name="imageSrc"
                value={editForm.imageSrc ? editForm.imageSrc[0].name : ""}
              />

              <span dir="rtl">העלה תמונה</span>
            </label>
            <input
              className="fileInput"
              placeholder=" "
              dir="rtl"
              type="file"
              name="imageSrc"
              onChange={e => handleEdit(e)}
            />
          </div>
        </Group>
        <DialogActions>
          <BtnGroup>
            <Button type="submit" color="primary">
              עדכן
            </Button>
            <Button onClick={handleClose} color="primary" dir="rtl">
              ביטול
            </Button>
          </BtnGroup>
        </DialogActions>
      </form>
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
  .content {
    text-align: center;
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
const Group = styled.div`
  font-family: "Varela Round", sans-serif;
  padding-right: 0.5em;
  display: flex;
  flex-direction: column;
  ._row {
    display: flex;
    max-width: 60em;
  }
  .center {
    justify-content: center;
  }
  label {
    margin: 0.8em 1em;
    position: relative;
    display: inline-block;
    text-align: center;
    color: #ed7777f0;
  }

  span {
    text-align: center;
    padding: 7px;
    pointer-events: none;
    position: absolute;
    right: 50%;
    top: 0;
    transform: translate(50%, 0);
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity: 0.5;
    width: fit-content;
  }

  input {
    padding: 5px;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    border-color: #cccccca0;
    text-align: center;
  }

  input:focus + span,
  input:not(:placeholder-shown) + span {
    opacity: 1;
    transform: scale(0.75) translateY(-100%) translateX(70%);
  }
  .fileInput {
    max-width: 7em;
    position: relative;
    left: 11em;
    height: 2em;
    top: 12px;
    opacity: 0;
  }
  .fileInput_top {
    position: relative;
  }
  @media (max-width: 600px) {
    ._row {
      display: flex;
      flex-direction: column;
      input {
      }
    }
  }
`;
const _DialogContent = styled(DialogContent)`
  overflow-y: initial !important;
`;
export default EditMod;
