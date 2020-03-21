import React, { useState, useEffect, useContext } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import styled from "styled-components";
import Context from "../../Context";

const Login = ({ handleClose }) => {
  const context = useContext(Context);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const handleLogin = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    context.login(loginForm);
  };
  return (
    <Container>
      <p className="title">התחבר</p>
      <_DialogContent>
        <p className="content">התחברו וצרו בחינם הזמנה אלקטרונית חכמה</p>
      </_DialogContent>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(loginForm);
        }}
      >
        <Group dir="rtl">
          <div className="_row">
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="email"
                value={loginForm.email}
                onChange={e => handleLogin(e)}
                required
              />
              <span dir="rtl">אימייל</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                type="password"
                name="password"
                value={loginForm.password}
                onChange={e => handleLogin(e)}
                required
              />
              <span dir="rtl">סיסמא</span>
            </label>
          </div>
        </Group>
        <DialogActions>
          <BtnGroup>
            <Button type="submit" color="primary">
              התחבר
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
  display: flex;
  flex-direction: column;
  ._row {
    display: flex;
    max-width: 60em;
    justify-content: center;
    label {
      margin: 0.8em 1em;
      position: relative;
      display: inline-block;
      text-align: center;
      color: #ed7777f0;
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
  }
  .center {
    justify-content: center;
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

  @media (max-width: 600px) {
    ._row {
      width: 100%;
      label {
        margin: 0.8em 0.2em;
        position: relative;
        display: inline-block;
        text-align: center;
        color: #ed7777f0;
      }
      input {
        width: auto;
        max-width: 10em;
        padding: 6px;
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
`;
export default Login;
