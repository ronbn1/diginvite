import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../Context";
import { useHistory, Link } from "react-router-dom";
const AdminNavBar = ({ match }) => {
  const context = useContext(Context);
  let history = useHistory();
  const onLogout = () => {
    context.logout();
    history.push("/");
  };
  return (
    <Nav>
      <ul>
        <Link to="/">
          <li className="logo">
            <span>DIG</span>Invite
          </li>
        </Link>

        <li onClick={onLogout}>
          <span>
            שלום {context.userState.groomName} ו{context.userState.brideName}
          </span>
          <i
            className="fas fa-sign-out-alt"
            onClick={e => context.logout()}
          ></i>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 3em;

  background-color: #2e2e39;

  ul {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em 0 2em;
    color: white;
    .logo {
      font-size: 1.5em;
      color: white;
      span {
        color: #ed7777;
      }
    }

    li {
      color: white;
      margin: 0.5em;
      padding: 0 0.5em 0 0.5em;
      i {
        margin-right: 1em;
        cursor: pointer;
      }
    }

    @media (max-width: 600px) {
      padding: 0 0.5em 0 0.5em;
    }
  }
`;
export default AdminNavBar;
