import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import NavBar from "../components/NavBar/NavBar";
import Img1 from "../assets/bg-1.jpg";
import Img2 from "../assets/bg-2.jpg";
import Img3 from "../assets/bg-3.jpg";
import Img4 from "../assets/Group 1@2x.png";
import Model from "../components/Model/Model";
import { LOGIN, REGISTER } from "../utils/types";
import Fotter from "../components/Fotter/Fotter";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
const LandingPage = () => {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [mode, setMode] = useState();

  const handleModelIsOpen = () => {
    setModelIsOpen(true);
  };

  return (
    <Container>
      <NavBar />
      <div className="absolute">
        <Carousel controls={false} indicators={false} fade>
          <Carousel.Item>
            <HeaderImg img={Img1} />
          </Carousel.Item>
          <Carousel.Item>
            <HeaderImg img={Img3} />
          </Carousel.Item>
        </Carousel>
      </div>
      <main>
        <header>
          <p className="brand">DIGInvite</p>
          <p>יצירת הזמנה דיגיטלית בקליק</p>
        </header>

        <div className="center">
          <div className="example">
            <img src={Img4} alt="" />
          </div>
          <div className="card">
            <div className="top">
              <p>אנו מזמינים אותכם ליצור הזמנה דיגיטלית חכמה בקליק</p>
            </div>
            <div className="body">
              <p>יצירת הזמנה מעוצבת בקליק </p>
              <p>שליחת ההזמנה לאורחים ב-SMS</p>
              <p>מעכב אחרי אישורי הגעה</p>
              <p>ניווט דרך ההזמנה לאולם</p>
              <p>ניהול רשימת המוזמנים שלכם</p>
            </div>
            <p className="loginLinks">
              <span
                className="links"
                onClick={e => {
                  setMode(REGISTER);
                  setModelIsOpen(true);
                }}
              >
                הרשמה
              </span>{" "}
              /{" "}
              <span
                className="links"
                onClick={e => {
                  setMode(LOGIN);
                  setModelIsOpen(true);
                }}
              >
                כניסה
              </span>
            </p>
          </div>
        </div>
      </main>

      {modelIsOpen ? (
        <Model
          handleClose={e => setModelIsOpen(false)}
          open={modelIsOpen}
          mode={mode}
        />
      ) : null}
      <Fotter />
    </Container>
  );
};
const HeaderImg = styled.div`
  background-image: ${props => `url(${props.img})`};
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(30%);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  main {
    margin-top: 5em;
    height: calc(100vh - 7em);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .center {
      background-color: #2e2e39a5;
      width: 100%;
      height: 50%;
      .example {
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 10%;
        img {
          height: 100%;
        }
        @media (max-width: 600px) {
          display: none;
        }
      }
      .card {
        width: fit-content;
        background-color: #2e2e39;
        padding: 1em;
        text-align: right;
        margin-right: 15%;
        height: 100%;
        width: 30em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-shadow: 0 0 25px -10px white;
        border-radius: 10px;
        .top {
          font-size: 1.5em;
          text-align: center;
          p {
            color: white;
          }
        }
        .body {
          margin: 0 auto;
          p {
            font-size: 1.1em;
            color: white;
            padding: 0.3em;
            &::before {
              content: "\f00c";
              font-family: FontAwesome;
              margin-left: 0.5em;
              color: #ed7777;
            }
          }
        }
        .loginLinks {
          text-align: center;
          font-size: 1.5em;
          color: white;
          span {
            &:hover {
              color: #ed7777;
              cursor: pointer;
            }
            transition: 0.2s;
          }
        }
        @media (max-width: 600px) {
          margin: 0;
          width: 100vw;
          height: 100%;
          border: none;
          box-shadow: none;
          border-radius: 0;
        }
      }
    }
    header {
      display: none;
      @media (max-width: 600px) {
        display: block;
        text-align: center;
        font-size: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: -8em auto 0em auto;
        background-color: #2e2e39;
        padding: 0.5em;
        font-weight: bold;
        width: 80%;
        height: 4.5em;
        border-radius: 5px;
        position: relative;
        bottom: -5px;
        p {
          font-size: 0.9em;
          text-align: center;
          color: whitesmoke;
        }
        .brand {
          font-size: 1.7em;
          color: #ed7777;
        }
      }
    }
  }
`;
/* display: flex;
  flex-direction: column;

  height: 100vh;
  overflow: hidden;
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: -2;
  }
  .content {
    display: flex;

    width: 100vw;
    background-color: #2e2e39a5;
    box-shadow: 0px 0px 9px 0px ffffffa6;
    line-height: 1.3em;
    .details {
      padding: 1em;
      width: fit-content;
      margin: 0 auto;
      p {
        font-size: 1em;
        padding: 0.2em;

        &::before {
          content: "\f00c";
          font-family: FontAwesome;
          margin-left: 0.5em;
          color: #ed7777;
        }
      }
    }
    .top {
      line-height: 1.2em;
      text-align: center;
    }
    p {
      font-size: 1.5em;
      text-align: right;
      color: #eee;
      span {
        color: #ed7777;
      }
    }
    .loginLinks {
      padding-top: 1em;
      width: fit-content;
      margin: 0 auto;

      .links {
        cursor: pointer;
      }
    }
  }
  .example {
    position: absolute;
    left: 8em;
    bottom: 0;
    z-index: 9;
    img {
      height: 80vh;
    }
    @media (max-width: 600px) {
      & {
        display: none;
      }
    }
  }

  ._card {
    max-width: fit-content;
    margin-right: 15%;
    max-width: 26em;
    background-color: #2e2e39;
    padding: 2em 0.5em;
    box-shadow: 0px 0px 20px -5px white;
    @media (max-width: 600px) {
      & {
        max-width: 100vw;
        margin-right: unset;
        background-color: #2e2e39a0;
      }
    }
  }
  header {
    margin: 5em 0 2em 0;
    display: none;
    @media (max-width: 600px) {
      display: block;
      width: 100vw;
      margin-right: unset;
      z-index: 102;
      .top {
        line-height: 1.2em;
        text-align: center;
      }
      p {
        font-size: 1.5em;
        text-align: right;
        color: #2e2e39;
        text-align: center;
        span {
          color: #ed7777;
        }
      }
    }
  } */
//`;
export default LandingPage;
