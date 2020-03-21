import React, { useState } from "react";
import Context from "./Context";
import axios from "axios";
import setAuthToken from "./utils/setAuthToken";

const initialUserState = {
  id: null,
  brideName: null,
  groomName: null,
  token: null,
  isAuth: false,
  loading: true
};
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

const ContextProvider = props => {
  const [userState, setUserState] = useState(initialUserState);
  const [errors, setErrors] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const addError = (msg, type) => {
    const newAlert = {
      msg,
      type
    };

    setErrors(newAlert);
  };
  const removeError = (index = errors.length) => {
    setErrors(null);
  };
  const loadUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      const user = await axios.get("/api/users");
      const updatedUser = {
        id: user.data._id,
        brideName: user.data.brideName,
        groomName: user.data.groomName,
        token: token,
        isAuth: true,
        loading: false
      };
      setUserState(updatedUser);
    } else
      setUserState(state => {
        return { ...state, loading: false };
      });
  };

  const register = async data => {
    setSpinner(true);
    try {
      const token = await axios.post("/api/users", data, config);
      localStorage.setItem("token", token.data);
      loadUser();
      setSpinner(false);
      addError("ההרשמה בוצעה בהצלחה", "success");
    } catch (err) {
      console.log(err.response.data, "error");
      setSpinner(false);
      addError(err.response.data, "warning");
    }
  };
  const login = async data => {
    setSpinner(true);
    try {
      const token = await axios.post("/api/users/login", data, config);
      localStorage.setItem("token", token.data);
      loadUser();
      setSpinner(false);
      addError("התחברתם בהצלחה", "success");
    } catch (err) {
      console.log(err);
      setSpinner(false);
      addError("האימייל או הסיסמא שגויים", "warning");
    }
  };
  const logout = async data => {
    localStorage.removeItem("token");
    setUserState(initialUserState);
  };

  const getUserData = async id => {
    setSpinner(true);
    try {
      const user = await axios.post("/api/users/userdata", { id });
      console.log(user);
      setSpinner(false);
      return user;
    } catch (err) {
      setSpinner(false);
      console.log(err);
    }
  };
  const updateUserData = async data => {
    setSpinner(true);
    try {
      const user = await axios.put(`/api/users/${userState.id}`, data, config);
      console.log(user);
      setUserState(state => {
        return {
          ...state,
          groomName: user.data.groomName,
          brideName: user.data.brideName,
          loading: false
        };
      });
      setSpinner(false);
      addError("העדכון בוצע בהצלחה", "success");

      return user;
    } catch (err) {
      setUserState(state => {
        return {
          ...state,
          loading: false
        };
      });
      setSpinner(false);
      console.log(err);
    }
  };

  const updateUserImage = async imageSrc => {
    setSpinner(true);
    try {
      const user = await axios.put(
        `/api/users/imageupdate/${userState.id}/${imageSrc}`,
        config
      );
      console.log(user);
      setUserState(state => {
        return {
          ...state,
          loading: false
        };
      });
      setSpinner(false);
      addError("העדכון בוצע בהצלחה", "success");

      return user;
    } catch (err) {
      setUserState(state => {
        return {
          ...state,
          loading: false
        };
      });
      setSpinner(false);
      console.log(err);
    }
  };

  const addInvited = async data => {
    try {
      const invited = await axios.post(`/invited`, data, config);
      console.log(invited);
      if (invited.data.status === "מגיע") {
        addError(
          `תודה ${invited.data.name} ! אישרת הגעה עבוד ${invited.data.amount} אורחים`,
          "success"
        );
      } else {
        addError(
          `תודה ${invited.data.name} ! נעדכן את הזוג שלא תוכלו להגיע`,
          "success"
        );
      }

      return invited;
    } catch (err) {
      setUserState(state => {
        return {
          ...state,
          loading: false
        };
      });
      console.log(err);
    }
  };
  const getInvited = async id => {
    try {
      const invited = await axios.get(`/invited/${id}`);
      return invited;
    } catch (err) {
      setUserState(state => {
        return {
          ...state,
          loading: false
        };
      });
      console.log(err);
    }
  };
  return (
    <Context.Provider
      value={{
        userState,
        errors,
        spinner,
        addError,
        removeError,
        loadUser,
        login,
        register,
        logout,
        getUserData,
        updateUserData,
        updateUserImage,
        getInvited,
        addInvited
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
