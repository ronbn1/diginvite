import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Model from "../Model/Model";
import { Link } from "react-router-dom";
import Context from "../../Context";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { LOGIN, REGISTER } from "../../utils/types";

const NavBar = () => {
  const context = useContext(Context);
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [mode, setMode] = useState();
  const [isInvitePage, setIsInvitePage] = useState(false);
  const [open, setOpen] = useState(false);

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ left: open });
  };

  const sideList = side => (
    <SideMenu
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <ul>
        <div>
          <li>בית</li>
          <Link target="_blank" to="/invite/example">
            <li>הזמנה לדגומא</li>
          </Link>
          <li
            onClick={e => {
              setMode(LOGIN);
              setModelIsOpen(true);
            }}
          >
            התחברות
          </li>
          <li
            onClick={e => {
              setMode(REGISTER);
              setModelIsOpen(true);
            }}
          >
            הרשמה
          </li>
        </div>
        <div>
          <i className="fas fa-home"></i>
          <i className="fas fa-file-alt"></i>
          <i className="fas fa-sign-in-alt"></i>
          <i className="fas fa-user-plus"></i>
        </div>
      </ul>
    </SideMenu>
  );
  const toggelOpen = () => {
    setOpen(isopen => !isopen);
  };
  useEffect(() => {
    setIsInvitePage(window.location.pathname.startsWith("/invite"));
  }, []);

  const handleLoginIsOpen = () => {
    setModelIsOpen(true);
  };
  const handleCloseModel = () => {
    setModelIsOpen(false);
    setModelIsOpen(false);
  };
  return (
    <>
      <Nav isInvitePage={isInvitePage}>
        <h1>
          <span>DIG</span>Invite
        </h1>
        <ul>
          <li>
            <Link to="/">בית</Link>
          </li>
          <li>
            <Link target="_blank" to="/invite/example">
              הזמנות לדוגמא
            </Link>
          </li>

          {!context.userState.loading && context.userState.isAuth && (
            <li>
              <Link to={`/invite/${context.userState.id}`}>
                ניהול ההזמנה שלי
              </Link>
            </li>
          )}
          <li>
            {!context.userState.loading && context.userState.isAuth ? (
              <>
                <span>{`שלום ${context.userState.groomName} ו${context.userState.brideName}`}</span>
                <span onClick={e => context.logout()}> | התנתק</span>
              </>
            ) : (
              <>
                <span
                  onClick={e => {
                    setMode(LOGIN);
                    setModelIsOpen(true);
                  }}
                >
                  {" "}
                  התחברות{" "}
                </span>
                /
                <span
                  onClick={e => {
                    setMode(REGISTER);
                    setModelIsOpen(true);
                  }}
                >
                  {" "}
                  הרשמה{" "}
                </span>
              </>
            )}
          </li>
        </ul>
        <i className="fas fa-bars" onClick={toggleDrawer("left", true)}></i>
      </Nav>
      {modelIsOpen ? (
        <Model
          handleClose={e => setModelIsOpen(false)}
          open={modelIsOpen}
          mode={mode}
        />
      ) : null}

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </>
  );
};

const Nav = styled.nav`
  display: ${props => (props.isInvitePage ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0em;
  z-index: 9;
  height: 5em;
  width: 100%;
  color: #2e2e39;
  background-color: #2e2e39;
  padding: 0 4em;
  h1 {
    font-size: 2em;
    color: white;
    span {
      color: #ed7777;
      font-weight: bold;
    }
  }
  i {
    display: none;
    color: white;
  }
  ul {
    font-size: 1.2em;
    display: flex;

    li {
      color: white;
      padding-right: 3.5em;
      span {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 0 1em;
    height: 3em;
    h1 {
      font-size: 1.5em;
      padding-right: 0.5em;
    }
    ul {
      display: none;
    }
    i {
      display: inline-block;
      color: white;
      margin-left: 1em;
    }
    .mobileMenu {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
const SideMenu = styled.div`
  width: 200px;
  ul {
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      flex-direction: column;
      height: 70vh;
      padding: 0.5em;
      justify-content: center;
      li {
        text-align: right;
        padding: 0.5em 0;
      }
      i {
        text-align: right;
        padding: 0.5em 0.3em;
        align-self: center;
        color: #ed7777;
      }
    }
  }
`;
export default NavBar;
