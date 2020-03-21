import React, { useState, useEffect, useContext } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import styled from "styled-components";
import Context from "../../Context";

const Register = ({ handleClose }) => {
  const context = useContext(Context);
  const [registerForm, setRegisterForm] = useState({
    email: "",
    phone: "",
    groomName: "",
    brideName: "",
    hallName: "",
    hallAddress: "",
    eventDate: "",
    greetingTime: "",
    weddingTime: "",
    groomPName: "",
    bridePName: "",
    imageSrc: "bg-2.jpg",
    password: "",
    password2: ""
  });

  const [stage, setStage] = useState(1);

  const handleRegister = e => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    context.register(registerForm);
  };

  const currentStage = () => {
    switch (stage) {
      case 1:
        return (
          <>
            <div className="_row">
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="groomName"
                  value={registerForm.groomName}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">שם החתן</span>
              </label>
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="brideName"
                  value={registerForm.brideName}
                  onChange={e => handleRegister(e)}
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
                  name="bridePName"
                  value={registerForm.bridePName}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">שם הורי הכלה</span>
              </label>

              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="groomPName"
                  value={registerForm.groomPName}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">שם הורי החתן</span>
              </label>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="_row">
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="hallName"
                  value={registerForm.hallName}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">שם האולם</span>
              </label>
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="hallAddress"
                  value={registerForm.hallAddress}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">כתובת האולם</span>
              </label>
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="eventDate"
                  value={registerForm.eventDate}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">תאריך האירוע</span>
              </label>
            </div>{" "}
            <div className="_row center">
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="greetingTime"
                  value={registerForm.greetingTime}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">שעת קבלת פנים</span>
              </label>

              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="weddingTime"
                  value={registerForm.weddingTime}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">שעת חופה</span>
              </label>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="_row">
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="email"
                  value={registerForm.email}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">אימייל</span>
              </label>
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="phone"
                  value={registerForm.phone}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">טלפון</span>
              </label>
            </div>

            <div className="_row center">
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="password"
                  type="password"
                  value={registerForm.password}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">סיסמא</span>
              </label>
              <label dir="rtl">
                <input
                  placeholder=" "
                  dir="rtl"
                  name="password2"
                  type="password"
                  value={registerForm.password2}
                  onChange={e => handleRegister(e)}
                  required
                />
                <span dir="rtl">אימות סיסמא</span>
              </label>
            </div>
          </>
        );
    }
  };

  return (
    <Container>
      <p className="title">הרשמה</p>
      <_DialogContent>
        <div className="stages">
          <p>
            <span
              onClick={e => setStage(1)}
              className={stage == 1 ? "currentStage" : ""}
            >
              שלב ראשון
            </span>
            <span
              onClick={e => setStage(2)}
              className={stage == 2 && "currentStage"}
            >
              שלב שני
            </span>
            <span
              onClick={e => setStage(3)}
              className={stage == 3 && "currentStage"}
            >
              שלב שלישי
            </span>
          </p>
        </div>
      </_DialogContent>

      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(registerForm);
        }}
      >
        <Group dir="rtl">{currentStage()}</Group>
        {stage == 3 ? (
          <DialogActions>
            <BtnGroup>
              <Button onClick={handleClose} color="primary" dir="rtl">
                ביטול
              </Button>
              <Button type="submit" color="primary">
                הרשם
              </Button>
            </BtnGroup>
          </DialogActions>
        ) : (
          <BtnGroup>
            <div className="stageControl">
              <div
                className="next"
                onClick={e => {
                  if (stage == 3) return;
                  setStage(state => state + 1);
                }}
              >
                המשך
                <i className="fas fa-angle-left"></i>
              </div>
              <div
                className="back"
                onClick={e => {
                  if (stage == 1) return;
                  setStage(state => state - 1);
                }}
              >
                <i className="fas fa-angle-right"></i> חזור
              </div>
            </div>
          </BtnGroup>
        )}
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
  .stages {
    p {
      text-align: center;
      span {
        margin: 1em;
      }
    }
    .currentStage {
      color: #ed7777f0;
    }
  }
  .content {
    text-align: center;
  }
`;
const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .stageControl {
    display: flex;
    flex-direction: row-reverse;
    div {
      font-family: "Varela Round", sans-serif;
      padding: 1em 3em;
      cursor: pointer;
      i {
        padding: 0 0.3em;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
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

  @media (max-width: 600px) {
    ._row {
      display: flex;
      max-width: 21em;
      flex-wrap: wrap;
      justify-content: center;
      label {
        margin: 0.8em 0.2em;
        position: relative;
        display: inline-block;
        text-align: center;
        color: #ed7777f0;
      }
      input {
        padding: 5px;
        width: 10em;
        border-radius: 3px;
        border-style: solid;
        border-width: 1px;
        border-color: #cccccca0;
        text-align: center;
      }
    }
  }
`;
const _DialogContent = styled(DialogContent)`
  overflow-y: initial !important;
  padding: 0.5em 0 !important;
`;
export default Register;
