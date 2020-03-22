import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Context from "../../Context";

const Confirmation = ({ invitation, setAlreadyReply }) => {
  const [amount, setAmount] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState(false);
  const context = useContext(Context);

  const onSubmit = () => {
    const status = confirm ? "מגיע" : "לא מגיע";
    const gustData = {
      name,
      phone,
      amount,
      status,
      user: invitation
    };

    context.addInvited(gustData);
    setName("");
    setPhone("");
    setAmount(1);
  };

  return (
    <Container>
      <div className="rsvp">
        <p>אישור הגעה</p>
        <form
          onSubmit={e => {
            e.preventDefault();

            onSubmit(true);
          }}
        >
          <div className="ditailsInput">
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <span dir="rtl">שם</span>
            </label>
            <label dir="rtl">
              <input
                placeholder=" "
                dir="rtl"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <span dir="rtl">טלפון</span>
            </label>
          </div>
          <div className="rsvp_counter">
            <i
              className="fas fa-plus-circle Myplus"
              onClick={e => setAmount(amount + 1)}
            ></i>
            <input type="text" value={amount} />
            <i
              className="fas fa-minus-circle Myminus"
              onClick={e => {
                if (amount !== 1) return setAmount(amount - 1);
              }}
            ></i>
          </div>
          <div className="confirm">
            <button
              onClick={e => setConfirm(true)}
              type="submit"
              className="yes"
            >
              <p> מגיע</p>
            </button>
            <button
              onClick={e => setConfirm(false)}
              type="submit"
              className="no"
            >
              <p>לא מגיע</p>
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .ditailsInput {
    display: flex;
    justify-content: center;
    padding-bottom: 1em;
    font-family: "Varela Round", sans-serif;
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
      transform: scale(0.75) translateY(-100%) translateX(220%);
    }
    label {
      margin: 0.8em 1em;
      position: relative;
      display: inline-block;
      text-align: center;
      color: #a33e3e;
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
  }
  .rsvp {
    & > p {
      text-align: center;
      margin-bottom: 1em;
    }
    .rsvp_counter {
      display: flex;
      justify-content: center;
      position: relative;

      width: fit-content;
      overflow: visible;
      margin: 0 auto;
      .Myplus,
      .Myminus {
        font-size: 1.7em;
        position: absolute;
        top: -2px;
        color: #555555;
      }
      .Myplus {
        left: -10px;
      }
      .Myminus {
        right: -10px;
      }
      input {
        width: 6em;
        text-align: center;
      }
    }
    .confirm {
      display: flex;
      justify-content: center;
      margin-top: 2em;
      background-color: transparent;
      border: 0 solid black;
      button {
        border: 0 solid black;
        p {
          color: white;
        }
        text-align: center;
        padding: 0.7em 0 0.7em 0;
        width: 7em;
        margin: 1em;
        background-color: #838697;
        border-radius: 1em;
      }
    }
  }
  @media (max-width: 600px) {
    .rsvp_counter {
      width: fit-content;
      overflow: visible;
      margin: 0 auto;
      .Myplus,
      .Myminus {
        font-size: 1.7em;
        color: #555555;
      }
      .Myplus {
        left: -10px;
      }
      .Myminus {
        right: -10px;
      }
    }
    .ditailsInput {
      input {
        max-width: 9em;
      }
    }
  }
`;
export default Confirmation;
