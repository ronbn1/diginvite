import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Ring from "../../assets/rings.svg";
import Divider from "../../assets/abstract-3166168_1280.png";
import Context from "../../Context";
import Img1 from "../../assets/bg-1.jpg";
import Img2 from "../../assets/bg-2.jpg";
import Img3 from "../../assets/bg-3.jpg";
import AdminNavBar from "../NavBar/AdminNavBar";
import Confirmation from "../Confirmation/Confirmation";
import Navigation from "../Navigation/Navigation";
import Model from "../Model/Model";
import Rsvps from "../Rsvps/Rsvps";
import Fotter from "./Fotter";
import CopyInviteLink from "../CopyInviteLink/CopyInviteLink";
import { EDIT, CHANGE_IMAGE } from "../../utils/types";

const Generator = ({ isOwner, invitation, example, data }) => {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [alreadyReply, setAlreadyReply] = useState(false);
  const [mode, setMode] = useState();
  const [image, setImage] = useState("");

  const content = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("alreadyReply")) {
      setAlreadyReply(localStorage.getItem("alreadyReply"));
    }
    switch (data.imageSrc) {
      case "bg-1.jpg":
        setImage(Img1);
        break;
      case "bg-2.jpg":
        setImage(Img2);
        break;
      case "bg-3.jpg":
        setImage(Img3);
        break;
      default:
        setImage(Img1);
    }
  }, []);
  return (
    <Container>
      <main>
        {isOwner && <AdminNavBar />}
        <div className="imageContainer">
          <img className="mainImage" src={image} alt="img" />
          {isOwner && (
            <i
              onClick={e => {
                setMode(CHANGE_IMAGE);
                setModelIsOpen(true);
              }}
              className="fas fa-image editImg"
            ></i>
          )}
        </div>
        <div className="content">
          {isOwner && (
            <i
              onClick={e => {
                setMode(EDIT);
                setModelIsOpen(true);
              }}
              className="fas fa-edit editContent"
            ></i>
          )}
          <div className="top">
            <p>הינכם מוזמנים לחתונה של</p>
            <p className="names bold">
              {data.groomName}
              <object
                aria-label="rings"
                className="rings"
                type="image/svg+xml"
                data={Ring}
              />
              {data.brideName}
            </p>
          </div>
          <img className="divider" src={Divider} alt="Divider" />

          <div className="body">
            <p>
              שתתקיים ביום שלישי ,{" "}
              <span className="bold">{data.eventDate}</span>
            </p>
            <p>
              קבלת פנים - <span className="bold">{data.greetingTime}</span> |
              חופה וקידושין -<span className="bold">{data.weddingTime}</span>
            </p>
            <p>
              ב - <span className="bold">{data.hallName}</span>
            </p>
            <p>{data.hallAddress}</p>

            <div className="blessing">
              <p>בואו עם הרבה מצב רוח</p>
              <p>נשמח לראותכם בין אורחינו</p>
            </div>

            <p className="bold">
              {data.groomName} ו{data.brideName}
            </p>
          </div>
          <div className="fotter">
            <div className="right">
              <p>הורי החתן</p>
              <p>{data.groomPName}</p>
            </div>
            <div className="left">
              <p>הורי הכלה</p>
              <p>{data.bridePName}</p>
            </div>
          </div>
        </div>
        <hr />
        {!isOwner ? (
          <>
            <Navigation address={data.hallAddress} name={data.hallName} />
            {alreadyReply &&
            localStorage.getItem("alreadyReplyTo") == data.id ? (
              <p className="alreadyReply">
                תודה {alreadyReply}, תשובתך נשמרה !
              </p>
            ) : (
              <Confirmation
                invitation={invitation}
                setAlreadyReply={setAlreadyReply}
              />
            )}
          </>
        ) : (
          <>
            <Rsvps />
            <CopyInviteLink />
          </>
        )}
        <Fotter />
      </main>
      {modelIsOpen && (
        <Model
          open={modelIsOpen}
          data={data}
          handleClose={e => setModelIsOpen(false)}
          mode={mode}
        />
      )}
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: grey;
  display: flex;
  justify-content: center;

  main {
    width: 100%;
    max-width: 45em;
    background-color: white;

    .imageContainer {
      position: relative;
      .mainImage {
        width: 100%;
        max-height: 20em;
        object-fit: cover;
      }
      .editImg {
        cursor: pointer;
        position: absolute;
        font-size: 1.5em;
        bottom: 1em;
        left: 1em;
        color: white;
      }
    }
    p {
      text-align: center;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.5em;
      margin: 1em;
      position: relative;
      .top {
        .names {
          margin-top: 1em;
          font-size: 1.4em;
        }
      }

      .rings {
        width: 1em;
        margin: 0 1em 0 1em;
      }
      .divider {
        width: 10em;
        opacity: 0.7;
      }
      .bold {
        color: #a33e3e;
        font-weight: bold;
      }
      .body {
        .blessing {
          margin: 1em;
        }
      }
      .fotter {
        display: flex;
        justify-content: space-between;
        width: 25em;
        font-size: 0.9em;
        line-height: 1.2em;
        margin: 1em;
      }
      .editContent {
        position: absolute;
        left: 0.4em;
        cursor: pointer;
        font-size: 1.5em;
      }
    }
    .alreadyReply {
      margin: 1em;
    }
  }
`;

export default Generator;
